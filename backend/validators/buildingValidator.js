const {body} = require("express-validator");

const buildingCreationValidation = [
    body("name")
        .trim()
        .notEmpty().withMessage("Building name is required")
        .bail()
        .matches(/^[a-zA-Z0-9 ]+$/).withMessage("Name shld not contain special characters"),

    body("city")
        .trim()
        .notEmpty().withMessage("City name is required")
        .bail()
        .matches(/^[a-zA-Z]+$/).withMessage("Enter valid city name"),

    body("area")
        .trim()
        .notEmpty().withMessage("Enter area in which building is located")
        .bail()
        .matches(/^[a-zA-Z]+$/).withMessage("Enter valid area name"),

    body("price")
        .trim()
        .notEmpty().withMessage("Starting price of the flats is required")
        .bail()
        .matches(/^[0-9]+$/)     
]

module.exports = {buildingCreationValidation}