import express from 'express';
import fs from 'fs';

const laptopdatacontroller = express.Router();

laptopdatacontroller.get("/lap/:id(\\d+)", (req, res) => {
    var data = getdata().find(x => x.id === req.params.id);
    res.send(data);
});

laptopdatacontroller.post("/lap", (req, res) => {

});

laptopdatacontroller.get("/lap", (req, res) => {
    var data = getdata();
    res.send(data);
});


/**
 * get all the data
 */
const getdata = () => {
    const row = fs.readFileSync(`${process.cwd()}/server/api/data.json`);
    const laptops = JSON.parse(row);
    return laptops;
}

export default laptopdatacontroller;