import * as loginView from './views/loginView';
import Login from './models/Login';
import * as appconstant from './appconstant';

import * as authUtility from './authUtility';
import {
    setAuthDetails
} from './views/loginDetailView';


const state = {};

appconstant.elments_login.submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const credential = loginView.getUserCrendentail();
    const login = new Login(credential.email, credential.password);

    await login.login()
    authUtility.storeToken(login.data);
});

window.addEventListener('load', (event) => {
    setAuthDetails(state);
})

function getAuth() {
    let isLoggedIn = authUtility.isLoggedIn();
    if (isLoggedIn) {
        isLoggedIn = authUtility.isExpire();
        state.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
            state.username = authUtility.getUsername();
            state.id = authUtility.getUserId();
        }
    }
}

appconstant.elements_loginDetail.login.addEventListener("click", e => {
    e.preventDefault();
    console.log(e.target);
})

appconstant.elements_loginDetail.logout.addEventListener("click", e => {
    e.preventDefault();
    console.log(e.target);
})