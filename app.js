const express = require('express');
const app = new express();
const nav = [
    {link:'/',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbook',name:'Add Book'},
    {link:'/addauthor',name:'Add Author'},
    {signin:'/signin',name:'Sign In'},
    {signup:'/signup',name:'Sign Up'},
    {signout:'/welcome',name:'Sign Out'}
    ];

const adminRouter = require('./src/routes/adminRoutes')(nav);
const indexRouter = require('./src/routes/indexRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const welcomeRouter = require('./src/routes/welcomeRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);
const updatebookRouter = require('./src/routes/updatebookRoutes')(nav);
const updateauthorRouter = require('./src/routes/updateauthorRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/admin',adminRouter);
app.use('/user/',indexRouter);
app.use('/user/books',booksRouter);
app.use('/user/authors',authorsRouter);
app.use('/',welcomeRouter);
app.use('/welcome',welcomeRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/admin/addbook',addbookRouter);
app.use('/admin/addauthor',addauthorRouter);
app.use('/admin/updatebook',updatebookRouter);
app.use('/admin/updateauthor',updateauthorRouter);

app.listen(5002);
console.log("sever port is 5002");