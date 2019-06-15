import * as appconstant from '../../scripts/appconstant';
import Register from '../models/Register';

export const getFormData = () => {
    const email = appconstant.elments_register.email.value;
    const password = appconstant.elments_register.password.value;
    const address = appconstant.elments_register.address.value;
    const address2 = appconstant.elments_register.address2.value;
    const city = appconstant.elments_register.city.value;
    const state = appconstant.elments_register.state.value;
    const postcode = appconstant.elments_register.postcode.value;
    const country = appconstant.elments_register.country.value;

    const register = new Register(
        email,
        password,
        address,
        address2,
        city,
        state,
        postcode,
        country
    );

    return register;
}