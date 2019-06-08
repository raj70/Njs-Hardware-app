import express from 'express';
import RegisterModel from '../models/UserModel';

const registerController = express.Router();

registerController.post('/register', (req, res) => {
    //todo: validate

    const registerModel = new RegisterModel(req.body.email, req.body.password, req.body.address, req.body.address2, req.body.city, req.body.state, req.body.postcode, req.body.country);
    registerModel.register(res);
});


export default registerController;