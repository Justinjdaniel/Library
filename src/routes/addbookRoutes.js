const express = require('express');
const multer = require('multer');
const addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/images');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage,});

function router(nav){
    const add =[
        {
            head:'Add a Book',
            title:'Book Title',
            author:'Author',
            genre:'Genre',
            published:'Published',
            about:'About',
            cover:'Book Cover'
        }
    ]

    addbookRouter.get('/',(req,res)=>{
        res.render("addbook",
        {
            nav,
            title:'Add Book | Library App',
            head:'Add Book',
            add
        });
    });

    addbookRouter.post('/add',upload.single('img'),(req,res)=>{
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            published: req.body.published,
            about: req.body.about,
            img: req.file.originalname
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/admin/books');
    });

    return addbookRouter;
}

module.exports = router;