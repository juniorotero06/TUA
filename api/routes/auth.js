const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');


//esquema de validaciones
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(7).max(1024).required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{7,1024}$/)
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(7).max(1024).required()
})

//Login
router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    //Validando email
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    //validando password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Contraseña no válida' });
    
    // create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})

//Register
router.post('/register', async (req, res) => {

     // validate user
     const { error } = schemaRegister.validate(req.body)
    
     if (error) {
         return res.status(400).json(
             {error: error.details[0].message}
         )
     }
     //Validadr si el email existe
     const isEmailExist = await User.findOne({ email: req.body.email });
     if (isEmailExist) {
        return res.status(400).json(
        {error: 'Email ya registrado'}
        )
     }

     //Hasshear Contraseña
     const salt = await bcrypt.genSalt(10);
     const password = await bcrypt.hash(req.body.password, salt);

     //Creando el nuevo usario 
     const user = new User({
         name: req.body.name,
         email: req.body.email,
         password
     });
     try {
         const savedUser = await user.save();
         res.json({
             error: null,
             data: savedUser
         })
     } catch (error) {
         res.status(400).json({error})
     }
})

module.exports = router;