const {body} = require("express-validator");

const registerValidation = [
    body("name")
        .trim() // Trims spaces from req.body.name, ensuring no trailing spaces reach MongoDB
        .notEmpty()
        .withMessage("Name is required")
        .bail()
        .isLength({min:3})
        .withMessage("Name msut be atleast 3characters long"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Please enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("password is required")
        .bail()
        .isLength({min:6})
        .withMessage("Password must be atleast 6characters")
    
];

const loginValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
]

module.exports = {
    registerValidation,
    loginValidation
}