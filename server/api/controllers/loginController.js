import express from 'express';
import LoginModel from '../models/LoginModel';

const authenticateController = express.Router();

authenticateController.post("/auth", (req, res) => {
    //todo: validate
    const login = new LoginModel(req.body.user, req.body.pword);
    const isValid = login.login(res);
});

export default authenticateController;