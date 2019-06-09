import axios from 'axios';
import {
    http
} from '../httpUtility';

export default class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async login() {
        try {
            const resp = await http().post("auth", {
                email: this.username,
                password: this.password
            });
            this.data = resp.data;

        } catch (error) {
            console.log(error);
        }
    }
}