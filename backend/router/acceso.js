express = require('express'),
router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../database/database");
// Model
let usuario = require('../models/usuario');
// Validation
let signUpValidate = require('../validation/signup')
let loginValidate = require('../validation/login')


// Loguear Usuario
router.route('/login').post((req, res) => {

    // Form validation
    const { errors, isValid } = loginValidate(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Validaciones Correctas
    else{
        usuario.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password)
                .then((isMatch) => {
                    if (isMatch) {
                        // User matched
                        // Create JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            lastName: user.lastName,
                            email: user.email,
                            // password: user.password
                        };
                        // Sign token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {
                                expiresIn: 3600, // 1 hour in seconds
                            },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                });
                            }
                        );
                    } else {
                        res.json({ success: false, incorrect: "Incorrect email and / or password" });
                    }
                })
            } else {
                res.json({ success: false, incorrect: "Incorrect email and / or password" });
            }
        })
    }
})

// Crear Usuario
router.route('/signup').post((req, res) => {
    // Form validation
    const { errors, isValid } = signUpValidate(req.body);

    if(!isValid){
        res.json({
            register: false,
            errors
        })
    }

    // Validaciones Correctas
    else{
        usuario.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.json({ register: false, errors: {email: "Email already exists"} });
            } else {
                // Encriptación de la password
                req.body.password = bcrypt.hashSync(req.body.password, 10);
                usuario.create(req.body,(error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json({
                            register: true,
                            data
                        })
                    }
                })
            }
        })
    }
})

module.exports = router;