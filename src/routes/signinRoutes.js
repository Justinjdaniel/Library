const express = require ('express');
const signinRouter = express.Router();
const Userdata = require('../model/SignUpdata');

function router(nav){

    signinRouter.get('/',(req,res)=>{
        res.render("signin",
        {
            nav,
            title:'Sign In | Library App',
            head:'Sign In',
        });
    });

    signinRouter.post('/validate',(req,res)=>{
        var vali = {
            useremail: req.body.useremail,
            password: req.body.password
        }
        if((vali.useremail == "admin@library.com")&&(vali.password == "Admin.12345")){
            res.redirect('/admin');
        }
        else{
            Userdata.findOne({useremail: vali.useremail, password: vali.password})
            .then(function(userdata){
                if(userdata != null){
                    res.redirect('/user');
                }
                else{
                    res.redirect('/signin');
                };
            });
        }

    });

    return signinRouter;
}

module.exports = router;