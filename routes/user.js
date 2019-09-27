const Express = require('express');
const Router = Express.Router();
const User = require('./../models/userModel');

//TODO: liiguta funktsioon kontrollerisse
Router.get('/create', async (req,res)=>{
    
    let newUser = new User({
        username: 'mativ',
        password: '4k46hg3yf2ub2u4by46uu43',
        email: 'mati.valli@vikk.ee',
        firstName: 'Mati',
        lastName: 'Valli'
    });
    let result = await newUser.save();
    res.send(result);
});

module.exports = Router;