import * as appconstant from '../../scripts/appconstant';

export const getUserCrendentail = () => {
    var email = appconstant.elments_login.email.value;
    var password = appconstant.elments_login.password.value;
    var checkMeOut = appconstant.elments_login.checkmeout.value;

    return {
        email,
        password,
        checkMeOut
    };
}