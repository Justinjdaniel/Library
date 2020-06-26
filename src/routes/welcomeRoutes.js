const express = require ('express');

const welcomeRouter = express.Router();
function router(nav){
    var welcome =[
        {
            quote:'“A room without books is like a body without a soul.”',
            author:'Marcus Tullius Cicero'
        },
        {
            quote:'“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
            author:'John Green'
        },
        {
            quote:'“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
            author:'Mark Twain'
        }
    ]
    var readnxt =[
        {
            read1:'Deciding what to read next?',
            read2:'ou’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations. Sign In to access more books and stories,',
            read3:'New here? Create a free account!'
        }
    ];

    welcomeRouter.get('/',(req,res)=>{
        res.render("welcome",
        {
            nav,
            title:'Welcome | Library App',
            head:'Welcome',
            welcome,
            readnxt
        });
    });

    return welcomeRouter;
}

module.exports = router;