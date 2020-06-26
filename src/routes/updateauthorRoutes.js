const express = require('express');
const multer = require('multer');
const updateauthorRouter = express.Router();
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
            head:'Update an Author',
            author:'Author',
            born:'Born',
            birthplace:'Birth Place',
            died:'Died',
            deathplace:'Death Place',
            about:'About',
            img:'Author Image'
        }
    ]

    updateauthorRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        res.render("updateauthor",
        {
            nav,
            title:'Update Author | Library App',
            head:'Update Author',
            add,
            id
        });
    });

    updateauthorRouter.post('/:id/up',upload.single('img'),(req,res)=>{
        const id = req.params.id;
        var update = {
            author: req.body.author,
            born: req.body.born,
            birthplace: req.body.birthplace,
            died: req.body.died,
            deathplace: req.body.deathplace,
            about: req.body.about,
            img: req.file.originalname
        }
        Authordata.findByIdAndUpdate({_id: id},update,()=>{
            res.redirect('/admin/authors');
        });
    });

    return updateauthorRouter;
}

module.exports = router;