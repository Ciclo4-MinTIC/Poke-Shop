express = require('express'),
router = express.Router();
// Student Model
let usuario = require('../models/usuario');

// CREATE Student
// router.route('/create-student').post((req, res, next) => {
//     studentSchema.create(req.body, (error, data) => {
//     if (error) {
//         return next(error)
//     } else {
//         console.log(data)
//         res.json(data)
//     }
// })
// });

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
    //let existe = false
//     let respuesta={
//         "validacionCorreo": true,
//         "validacionContrasena":true,
//         "registroUsuario":false
//     }

//     users.forEach(user => {
//         if(user.email === req.body.email){
//             console.log("ya existe")
//             //existe=true
//             respuesta.validacionCorreo=false



//         }
//     })

//     if (req.body.password.length < 8 ){
//         respuesta.validacionContrasena=false
//         console.log("contraseña invalida")
//     }
//    if (respuesta.validacionCorreo && respuesta.validacionContrasena){
//        respuesta.registroUsuario=true
//    }
//    res.json(respuesta)
})

// // Get Single Student
// router.route('/edit-student/:id').get((req, res) => {
//   studentSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// // Update Student
// router.route('/update-student/:id').put((req, res, next) => {
//   studentSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student updated successfully !')
//     }
//   })
// })

// // Delete Student
// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//         return next(error);
//     } else {
//         res.status(200).json({
//         msg: data
//         })
//     }
//   })
// })

module.exports = router;