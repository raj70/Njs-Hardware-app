import * as loginView from './views/loginView';
import Login from './models/Login';
import * as appconstant from './appconstant';



appconstant.elments_login.submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const credential = loginView.getUserCrendentail();
    const login = new Login(credential.userName, credential.password);

    const status = await login.login()
    if (status === 200) {
        console.log(status);
    }

});