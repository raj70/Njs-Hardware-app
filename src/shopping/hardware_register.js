import * as hardware_registerView from './views/hardware_registerView';
import Hardware_Register from './models/Hardware_Register';
import * as appconstant from '../scripts/appconstant';

import {
    setAuthDetails
} from '../auths/views/loginDetailView';

const state = {

}

window.addEventListener('load', (w, event) => {
    setAuthDetails(state);
})

appconstant.elments_hardware.submit.addEventListener("click", e => {
    e.preventDefault();
    const computer = hardware_registerView.getFormData();
    const hardware = new Hardware_Register(computer.productName, computer.cpu, computer.memory, computer.storage, computer.file, computer.screenSize, computer.price, computer.description);
    const computerFile = hardware_registerView.formFile();
    hardware.registerComputerFormdata(computerFile);
});