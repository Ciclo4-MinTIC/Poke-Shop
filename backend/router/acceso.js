express = require('express'),
router = express.Router();
// Model
let usuario = require('../models/usuario');
// Validation
let signUpValidate = require('../validation/signup')
let loginValidate = require('../validation/login')


// Loguear Usuario
router.route('/login').post((req, res) => {

    const user = {
        email: "camilo@utp.com",
        password: "1234"
    }
//   studentSchema.find((error, data) => {
//     if (error) {
//         return next(error)
//     } else {
//         res.json(data)
//     }
//   })
    if (req.body.email === user.email && req.body.password === user.password ){
        res.json({
            'estado': 'ok'
        })
    }
    else {
        res.json({
            "estado": "okn't"
        })
    }
})

// Crear Usuario
router.route('/signup').post((req, res) => {
    // Form validation
    const { errors, isValid } = signUpValidate(req.body);

    if(!isValid){
        res.status(400).json(errors)
    }

    // Campos bien digitados
    else{
        usuario.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                usuario.create(req.body,(error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(data)
                    }
                })
            }
        })
    }
})

module.exports = router;