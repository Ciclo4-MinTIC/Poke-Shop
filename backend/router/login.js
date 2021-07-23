// let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Student Model
// let studentSchema = require('../models/Student');

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

// READ Students
router.route('/validate').post((req, res) => {

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