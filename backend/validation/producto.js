const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProductoInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.titulo = !isEmpty(data.titulo) ? data.titulo : "";
    data.descripcion = !isEmpty(data.descripcion) ? data.descripcion : "";
    data.imagen = !isEmpty(data.imagen) ? data.imagen : "";
    data.precio = !isEmpty(data.precio) ? data.precio : "";
    data.calificacion = !isEmpty(data.calificacion) ? data.calificacion : "";
    data.tipo = !isEmpty(data.tipo) ? data.tipo : "";
    data.habilidad = !isEmpty(data.habilidad) ? data.habilidad : "";
    data.altura = !isEmpty(data.altura) ? data.altura : "";

    
    if (Validator.isEmpty(data.titulo)) {
        errors.titulo = "Titulo field is required";
    }
    if (Validator.isEmpty(data.descripcion)) {
        errors.descripcion = "Descripción field is required";
    }
    if (Validator.isEmpty(data.imagen)) {
        errors.imagen = "Imagen field is required";
    }
    
    if (Validator.isEmpty(data.precio)) {
        errors.precio = "Precio field is required";
    }else if(isNaN(data.precio)){
        errors.precio = 'Ingrese solo números'
    } else if (data.precio<0){
        errors.precio = "El precio ingresado no puede ser negativo"
    }
    if (Validator.isEmpty(data.tipo)) {
        errors.tipo = "Tipo field is required";
    }
    if (Validator.isEmpty(data.habilidad)) {
        errors.habilidad = "Habilidad field is required";
    }
    if (Validator.isEmpty(data.altura)) {
        errors.altura = "Altura field is required";
    }
    if(isNaN(data.calificacion)){
        errors.calificacion = 'Ingrese solo números'
    } else if (data.calificacion<0 || data.calificacion>5){
        errors.calificacion = "Ingrese un numero del 1 al 5"
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
};