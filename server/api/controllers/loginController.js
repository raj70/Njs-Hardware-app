import express from 'express';
import LoginModel from '../models/LoginModel';
import {
    validate
} from '../../utilities/user-validater';

const authenticateController = express.Router();

authenticateController.post("/auth", (req, res) => {
    const val = validate(req.body);
    if (!val.isValid) {
        return res.status(400).json({
            message: val.message
        });
    }
    const login = new LoginModel(req.body.email, req.body.password);
    const isValid = login.login(res);
});

export default authenticateController;