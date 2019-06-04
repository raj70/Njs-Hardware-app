import Hardware from './models/Hardware';
import * as appconstant from './appconstant';

import * as hardwareview from './views/hardwareview';

const state = {

}

const hardwareControl = async () => {
    const hardware = new Hardware(appconstant.hardware.lap);
    await hardware.getData();
    hardwareview.clearList();
    hardwareview.renderProducts(hardware.data);
    state.hardware_data = hardware.data;
}

hardwareControl();