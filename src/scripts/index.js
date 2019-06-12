import Hardware from './models/Hardware';
import * as appconstant from './appconstant';
import * as authUtility from './authUtility';
import * as hardwareview from './views/hardwareview';
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

const hardwareControl = async () => {
    const hardware = new Hardware(appconstant.hardware.lap);
    await hardware.getData();
    hardwareview.clearList();
    hardwareview.renderProducts(hardware.data);
    state.hardware_data = hardware.data;
}

hardwareControl();