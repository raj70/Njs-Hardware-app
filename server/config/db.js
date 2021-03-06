import mongoose from 'mongoose';

export function connectDb() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.Db_Url, {
        useNewUrlParser: true
    }, (error) => {
        if (error) {
            throw error;
        } else {
            console.log("Connected to MongoDb");
        }
    });
}