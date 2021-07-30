const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    // LastName checks
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "LastName field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    else if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};