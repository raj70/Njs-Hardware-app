import * as appconstant from '../../scripts/appconstant';

export const getFormData = () => {
    const productName = appconstant.elments_hardware.productName.value;
    const cpu = appconstant.elments_hardware.cpu.value;
    const memory = appconstant.elments_hardware.memory.value;
    const storage = appconstant.elments_hardware.storage.value;
    const file = appconstant.elments_hardware.file.value;
    const screenSize = appconstant.elments_hardware.screenSize.value;
    const price = appconstant.elments_hardware.price.value;
    const description = appconstant.elments_hardware.description.value;

    const hardware_register = {
        productName,
        cpu,
        memory,
        storage,
        file,
        screenSize,
        price,
        description
    };

    return hardware_register;
}

export const formFile = () => {
    const data = new FormData(appconstant.elments_hardware.form);

    return data;
}