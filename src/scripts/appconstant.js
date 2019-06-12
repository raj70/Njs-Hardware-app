export const hardware = {
    lap: 'laptop',
    pc: 'pc',
    keyboard: 'kb',
    mouse: 'm',
    motherboard: 'mb',

}
export const elements = {
    productlist: document.querySelector(".product__list"),
}

export const elments_login = {
    email: document.querySelector("#InputEmail"),
    password: document.querySelector("#InputPassword"),
    checkmeout: document.querySelector("#CheckMeOut"),
    submit: document.querySelector("button[type='submit']"),
}

export const elments_register = {
    email: document.querySelector("#inputEmail"),
    password: document.querySelector("#inputPassword"),
    address: document.querySelector("#inputAddress"),
    address2: document.querySelector("#inputAddress2"),
    city: document.querySelector("#inputCity"),
    state: document.querySelector("#inputState"),
    postcode: document.querySelector("#inputPostCode"),
    country: document.querySelector("#inputCountry"),
    submit: document.querySelector("button[type='submit']"),
}

export const elements_loginDetail = {
    email: document.querySelector("#email"),
    logout: document.querySelector("#logout"),
    login: document.querySelector("#login")
}

export const elments_hardware = {
    productName: document.querySelector("#inputProductName"),
    cpu: document.querySelector("#inputCpu"),
    memory: document.querySelector("#inputRam"),
    storage: document.querySelector("#inputStorage"),
    file: document.querySelector("#inputFile"),
    screenSize: document.querySelector("#inputScreen"),
    price: document.querySelector("#inputPrice"),
    description: document.querySelector("#inputDescription"),
    submit: document.querySelector("button[type='submit']"),
    form: document.querySelector("#formHardwareData")
}