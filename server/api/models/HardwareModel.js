import HardwareComputer from './db-hardwareModel';

export default class HardwareModel {
    constructor() {
        this.data = [];
    }

    async getProducts(res) {
        await HardwareComputer.find({}, (error, computers) => {
            if (error) {
                return res.status(500).json();
            }

            if (!computers) {
                return res.status(401).json({
                    message: "item not found"
                });
            }

            computers.forEach(x => {
                this.data.push(x);
            })
        });
    }

    async register(res, computer, data, contentType) {
        const hardwareComputer = new HardwareComputer({
            productName: computer.productName,
            cpu: computer.cpu,
            ram: computer.ram,
            storage: computer.storage,
            screen: computer.screen,
            price: computer.price,
            description: computer.description
        });

        hardwareComputer.image.data = data;
        hardwareComputer.image.contentType = contentType;

        await hardwareComputer.save(error => {
            if (error) {

                console.log(error);
                if (error.code === 11000) {
                    /* 11000 means user taken */
                    return res.status(403).json({
                        message: ' product is used '
                    });
                }
                return res.status(500).json();
            }

            return res.status(201).json();
        });

    }
}