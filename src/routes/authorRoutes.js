const express = require ('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){

    authorsRouter.get('/',(req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
            nav,
            navsize:'3',
            title:'Authors | Library App',
            head:'Authors',
            user:'user',
            authors,
            hide:{update:'#',delete:'#'},
            updel:{up:'',del:''}
            });
        })
    })
    
    authorsRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('author',
            {
            nav,
            navsize:'3',
            title:'Author | Library App',
            head:'Author',
            user:'user',
            author
            });
        })
    })

    return authorsRouter;
}

module.exports = router;