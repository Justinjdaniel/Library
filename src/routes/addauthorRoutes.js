const express = require('express');
const multer = require('multer');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

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
            head:'Add an Author',
            author:'Author',
            born:'Born',
            birthplace:'Birth Place',
            died:'Died',
            deathplace:'Death Place',
            about:'About',
            img:'Author Image'
        }
    ]

    addauthorRouter.get('/',(req,res)=>{
        res.render("addauthor",
        {
            nav,
            title:'Add Author | Library App',
            head:'Add Author',
            add
        });
    });

    addauthorRouter.post('/add',upload.single('img'),(req,res)=>{
        // console.log(req.file);
        var item = {
            author: req.body.author,
            born: req.body.born,
            birthplace: req.body.birthplace,
            died: req.body.died,
            deathplace: req.body.deathplace,
            about: req.body.about,
            img: req.file.originalname
        }
        var author = Authordata(item);
        author.save();
        res.redirect('/admin/authors');
    });

    return addauthorRouter;
}

module.exports = router;