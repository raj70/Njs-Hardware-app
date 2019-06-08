import {
    http
} from '../HttpUtility';

export default class Register {
    constructor(email,
        password,
        address,
        address2,
        city,
        state,
        postcode,
        country) {
        this.email = email;
        this.password = password;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.postcode = postcode;
        this.country = country;
    }

    async registerUser() {
        try {
            const user = {
                email: this.email,
                password: this.password,
                address: this.address,
                address2: this.address2,
                city: this.city,
                state: this.state,
                postcode: this.postcode,
                country: this.country
            };

            const resp = await http().post(`register`, user);
            this.data = resp.data;

            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
    }
}