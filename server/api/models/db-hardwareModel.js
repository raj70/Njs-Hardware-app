import mongoose from 'mongoose';

const hardwareComputerSchema = new mongoose.Schema({
    productName: String,
    image: {
        data: Buffer,
        constentType: String
    },
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: Number,
    description: {
        type: [String],
        index: true
    },
    quantity: Number
});

hardwareComputerSchema.set('timestamps', true);

hardwareComputerSchema.index({
    productName: 1,
    type: -1
})

export default mongoose.model('HardwareComputer', hardwareComputerSchema);