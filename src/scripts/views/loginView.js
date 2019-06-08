import * as appconstant from '../appconstant';

export const getUserCrendentail = () => {
    var userName = appconstant.elments_login.email.value;
    var password = appconstant.elments_login.password.value;
    var checkMeOut = appconstant.elments_login.checkmeout.value;

    return {
        userName,
        password,
        checkMeOut
    };
}