import {
    http
} from '../../scripts/httpUtility';


export default class HardwareRegister {
    constructor(productName, cpu, memory, storage, file, screensize, price, description) {
        this.productName = productName;
        this.cpu = cpu;
        this.memory = memory;
        this.storage = storage;
        this.file = file;
        this.screensize = screensize;
        this.price = price;
        this.description = description;
    }

    async registerComputerFormdata(data) {
        try {
            console.log(data);
            const fileUploadRes = await http().post('/computer_file', data);
            console.log(fileUploadRes);
            if (fileUploadRes.status === 200) {


                const computer = {
                    productName: this.productName,
                    cpu: this.cpu,
                    ram: this.memory,
                    storage: this.storage,
                    screen: this.screensize,
                    price: this.price,
                    description: this.description,
                    file: fileUploadRes.data.fileInfo

                };
                const res = await http().post('/computer', computer);
                if (res.status === 201) {
                    console.log("upload successfully");
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
}