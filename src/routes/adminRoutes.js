const express = require ('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

function router(nav){

    adminRouter.get('/',(req,res)=>{
        res.render("admin",
        {
            nav,
            navsize:'5',
            title:'Admin | Library App',
            head:'Administrator',
            user:'admin'
        });
    });


    adminRouter.get('/books',(req,res)=>{
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
            nav,
            navsize:'5',
            title:'Books | Library App',
            head:'Books',
            user:'admin',
            books,
            updel:{up:'Update',del:'Delete'}
            });
        })
    })

    adminRouter.get('/books/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',
            {
            nav,
            navsize:'5',
            title:'Book | Library App',
            head:'Book',
            user:'admin',
            book
            });
        })
    })

    adminRouter.get('/deletebook/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.deleteOne({_id: id})
        .then(function(books){
            res.render('books',
            {
            nav,
            navsize:'5',
            title:'Book | Library App',
            head:'Book Deleted',
            user:'admin',
            books
            });
        })
    })

    adminRouter.get('/authors',(req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
            nav,
            navsize:'5',
            title:'Authors | Library App',
            head:'Authors',
            user:'admin',
            authors,
            updel:{up:'Update',del:'Delete'}
            });
        })
    })

    adminRouter.get('/authors/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('author',
            {
            nav,
            navsize:'5',
            title:'Author | Library App',
            head:'Author',
            user:'admin',
            author
            });
        })
    })

    adminRouter.get('/deleteauthor/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.deleteOne({_id: id})
        .then(function(authors){
            res.render('authors',
            {
            nav,
            navsize:'5',
            title:'Author | Library App',
            head:'Author Deleted',
            user:'admin',
            authors
            });
        })
    })

    return adminRouter;
}

module.exports = router;