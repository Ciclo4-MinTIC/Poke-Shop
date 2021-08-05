express = require('express'),
router = express.Router();
// Producto Model
let producto = require('../models/producto');
// Validation
let productoValidate = require('../validation/producto')

// Crear Producto
router.route('/producto/create').post((req, res, next) => {
    // Form validation
    const { errors, isValid } = productoValidate(req.body);

    if (!isValid) {
        return res.json(errors);
    } else {

      producto.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
      })
    }
});

// Get Productos
router.route('/productos').get((req, res) => {
  producto.find((error, data) => {
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
        return next(error);
    } else {
        res.status(200).json({
        msg: data
        })
    }
  })
})

module.exports = router;