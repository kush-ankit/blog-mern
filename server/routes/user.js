const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/profile', (req, res)=>{
    res.send("Hello from user route")
})