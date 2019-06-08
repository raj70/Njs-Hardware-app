import User from './db-userModel';

export default class UserModel {
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

    async register(res) {
        const register = new User({
            email: this.email,
            password: this.password,
            address: this.address,
            address2: this.address2,
            city: this.city,
            state: this.state,
            postcode: this.postcode,
            country: this.country
        });

        await register.save(error => {
            if (error) {
                console.log(error);
                if (error.code === 11000) {
                    /* 11000 means user taken */
                    return res.status(403).json({
                        message: 'usename is used '
                    });
                }
                return res.status(500).json();
            }

            return res.status(201).json();
        });
    }
}