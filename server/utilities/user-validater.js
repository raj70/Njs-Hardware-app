import s from 'underscore.string';


export const validate = function (body) {
    let errors = '';
    if (s.isBlank(body.email)) {
        errors += "Email is required";
    }
    if (s.isBlank(body.password)) {
        errors += "Password is required";
    }

    return {
        isValid: s.isBlank(errors),
        message: errors
    };
}

export const validateUser = function (body) {
    let errors = '';
    if (s.isBlank(body.email)) {
        errors += `Validating user ${body.email} `;
        errors += "User name is required ";
    }
    if (s.isBlank(body.password)) {
        errors += "Password is required ";
    }
    if (s.isBlank(body.address)) {
        errors += "Address is required ";
    }
    if (s.isBlank(body.city)) {
        errors += "City is required ";
    }
    if (s.isBlank(body.state)) {
        errors += "State is required ";
    }
    if (s.isBlank(body.postcode)) {
        errors += "Postcode is required ";
    }
    if (s.isBlank(body.country)) {
        errors += "Country is required ";
    }

    return {
        isValid: s.isBlank(errors),
        message: errors
    };
}