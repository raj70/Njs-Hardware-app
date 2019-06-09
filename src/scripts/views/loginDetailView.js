import * as authUtility from '../authUtility';
import {
    elements_loginDetail
} from '../appconstant';


export function setAuthDetails(state) {
    let isLoggedIn = authUtility.isLoggedIn();
    if (isLoggedIn) {
        isLoggedIn = authUtility.isExpire();
        state.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
            state.username = authUtility.getUsername();
            elements_loginDetail.email.innerHTML = state.username;
            state.id = authUtility.getUserId();
            elements_loginDetail.login.style.display = "none";
        } else {
            elements_loginDetail.logout.style.display = "none";
            elements_loginDetail.email.innerHTML = "";
        }
    } else {
        elements_loginDetail.logout.style.display = "none";
        elements_loginDetail.email.innerHTML = "";
        elements_loginDetail.login.style.display = "inline-block";
    }
    console.log(state);
}