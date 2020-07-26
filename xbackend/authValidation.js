const joi = require('@hapi/joi')

const signupChecks = (data) => {
    const validations = joi.object({
        username:joi.string().min(4),
        email:joi.string().min(8).email(),
        password:joi.string().min(8)
    })
    return validations.validate(data)
}

const loginChecks = (data) => {
    const validations = joi.object({
        email:joi.string().min(8).email().required(),
        password:joi.string().min(8).required()
    })
    return validations.validate(data)
}

module.exports.signupChecks = signupChecks
module.exports.loginChecks = loginChecks