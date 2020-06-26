const express = require ('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){

    booksRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
            nav,
            navsize:'3',
            title:'Books | Library App',
            head:'Books',
            user:'user',
            books,
            hide:{update:'#',delete:'#'},
            updel:{up:'',del:''}
            });
        })
    })
    
    booksRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',
            {
            nav,
            navsize:'3',
            title:'Book | Library App',
            head:'Book',
            user:'user',
            book
            });
        })
    })

    return booksRouter;
}

module.exports = router;