const express = require('express');
const multer = require('multer');
const updatebookRouter = express.Router();
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

    updatebookRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        res.render("updatebook",
        {
            nav,
            title:'Update Book | Library App',
            head:'Update Book',
            add,
            id
        });
    });

    updatebookRouter.post('/:id/up',upload.single('img'),(req,res)=>{
        const id = req.params.id;
        var update = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            published: req.body.published,
            about: req.body.about,
            img: req.file.originalname
        }
        Bookdata.findByIdAndUpdate({_id: id},update,()=>{
            res.redirect('/admin/books');
        });
    });

    return updatebookRouter;
}

module.exports = router;