import * as registerView from './views/registerView';
import Register from './models/Register';
import * as appconstant from './appconstant';

appconstant.elments_register.submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const register = registerView.getFormData();
    await register.registerUser()
});