import express from 'express';
import HardwareModel from '../models/HardwareModel';
import fs from 'fs';
import multer from 'multer';

const multer_upload = multer({
    dest: 'uploads/'
}).single("pcImage");

const hardwareComputerController = express.Router();

hardwareComputerController.get("/computers", async (req, res) => {
    console.log("hi computers api");
    const computers = new HardwareModel();
    await computers.getProducts(res);

    res.status(200).json({
        data: computers.data
    });
});

/** multer only supports file  */
hardwareComputerController.post("/computer_file", (req, res) => {

    multer_upload(req, res, (error) => {
        if (error) {
            console.log(error);
            res.status(500).json({
                message: "error "
            })
            return;
        } else {
            res.status(200).json({
                fileInfo: req.file
            });
        }
    });
})
/** computer_file uploads file on upload folder */
hardwareComputerController.post("/computer", async (req, res) => {

    //TODO: Validate
    if (!req.body.file) {

        res.status(400).json({
            message: "file is missing"
        });
        return;
    }
    const file = req.body.file;
    const data = await fs.readFileSync(file.path, {
        encoding: 'utf-8'
    });

    const computer = {
        productName: req.body.productName,
        cpu: req.body.cpu,
        ram: req.body.ram,
        storage: req.body.storage,
        screen: req.body.screen,
        price: req.body.price,
        description: req.body.description
    };

    try {
        const hardware = new HardwareModel();
        hardware.register(res, computer, data, file.constentType);
    } finally {
        console.log(file.path);
        fs.unlink(file.path, error => {
            console.log(error);
        });
    }
})

export default hardwareComputerController;