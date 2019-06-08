import axios from 'axios';

export default class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async login() {
        try {
            const resp = await axios.post("http://localhost:2000/api/auth", {
                user: this.username,
                pword: this.password
            });
            this.data = resp.data;
            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
    }
}