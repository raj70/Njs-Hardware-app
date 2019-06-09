import DbUserModel from '../models/db-userModel';
import {
    generateToken
} from '../../utilities/token-helper';

export default class LoginModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login(res) {
        DbUserModel.findOne({
            email: this.username
        }, (error, user) => {
            if (error) {
                return res.status(500).json();
            }
            if (!user) {
                return res.status(401).json({
                    message: "user not found"
                });
            }

            const passwordMatch = DbUserModel.passwordMatches(this.password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({
                    message: "username or password does not match"
                });
            } else {
                const token = generateToken(user);
                return res.status(200).json(token);
            }
        })
    }
}