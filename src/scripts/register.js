import * as registerView from './views/registerView';
import Register from './models/Register';
import * as appconstant from './appconstant';

import {
    setAuthDetails
} from './views/loginDetailView';

const state = {

}

window.addEventListener('load', (w, event) => {
    setAuthDetails(state);
})

appconstant.elements_loginDetail.logout.addEventListener("click", e => {
    authUtility.logout();
    setAuthDetails(state);
})

appconstant.elments_register.submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const register = registerView.getFormData();
    await register.registerUser()
});