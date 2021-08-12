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
        return res.json({guardado:false,errors});
    } else {
      producto.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({guardado:true,data})
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

// Update Student
router.route('/producto/edit').put((req, res, next) => {

  const { errors, isValid } = productoValidate(req.body);

    if (!isValid) {
        return res.json({editado:false,errors});
    } else {
      producto.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json({editado:true,data})
        }
      })
    }
})

// Delete Student
router.route('/producto/delete/:id').delete((req, res, next) => {
  producto.findByIdAndRemove(req.params.id, (error, data) => {
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