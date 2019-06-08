import express from 'express';
import RegisterModel from '../models/UserModel';
import {
    validateUser
} from '../../utilities/user-validater';

const registerController = express.Router();

registerController.post('/register', (req, res) => {
    const val = validateUser(req.body);
    if (!val) {
        return res.status(400).json({
            message: val.message
        });
    }
    const registerModel = new RegisterModel(req.body.email, req.body.password, req.body.address, req.body.address2, req.body.city, req.body.state, req.body.postcode, req.body.country);
    registerModel.register(res);
});


export default registerController;