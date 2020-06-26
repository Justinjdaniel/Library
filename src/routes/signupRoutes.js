const express = require ('express');
const signupRouter = express.Router();
const Userdata = require('../model/SignUpdata');

function router(nav){

    signupRouter.get('/',(req,res)=>{
        res.render("signup",
        {
            nav,
            title:'Sign Up | Library App',
            head:'Sign Up',
        });
    });

    signupRouter.post('/add',(req,res)=>{
        var userdetail = {
            name: req.body.name,
            useremail: req.body.useremail,
            phonenumber: req.body.phonenumber,
            password: req.body.password,
        }
        var user = Userdata(userdetail);
        user.save();
        res.redirect('/signin')
    })

    return signupRouter;
}

module.exports = router;