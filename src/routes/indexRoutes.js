const express = require ('express');

const indexRouter = express.Router();
function router(nav){
    var indcontent =[
        {
            head:'Repurpose Content To Reach a Wider Audience',
            site:'97thfloor.com',
            time:'2 hours ago',
            img:'Lib1.jpg'
        },
        {
            head:'14 Useful Sites for Designers',
            site:'devgarage.com',
            time:'2 days ago',
            img:'Lib2.jpg'
        },
        {
            head:'TrendPaper - Whats\'s Trending in the World',
            site:'betali.st',
            time:'Last week',
            img:'Lib3.jpg'
        }
    ]

    indexRouter.get('/',(req,res)=>{
        res.render("index",
        {
            nav,
            navsize:'3',
            title:'Home | Library App',
            head:'Library',
            user:'user',
            indcontent
        });
    });

    return indexRouter;
}

module.exports = router;