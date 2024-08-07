const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blogs');
const blogRoutes = require('./routes/blogRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

// when we are rendering view, first view will be passed to view engine and then view engine see's for dynamic content which is written in JS and coverts it into equivalent html and passes to browser
// all the process is called server side rendering
app.set('view engine', 'ejs');  

const port = process.env.PORT;
const url = process.env.MONGO_URL
mongoose.connect(url)
   .then((result)=>{
    console.log("Connected");
    app.listen(port);
   })
   .catch((err)=>{
    console.log(err);
   })
 

// the below middleware is set to allow the static files like css,images available for browsers
app.use(express.static('public'));

// attach the data to req object in workable format
app.use(express.urlencoded({extended: true}));

// This is the middleware that runs for every request. we set this middleware manually to log the request details on to the console
/*
app.use((req,res,next) => {
    console.log("New request has made:");
    console.log("Hostname: ",req.hostname);
    console.log("Path: ",req.path);
    console.log("Method: ",req.method);
    next();
}) */

// 3rd party middleware we have installed using npm to do the same task as above code does which logs details of req
app.use(morgan('dev'));


// Importing routes from routes folder :- keeping routes in another folder and controller function in another folder makes our code and files structured, easily readable and managable

// blogRoutes

app.use(blogRoutes);

// abouRoutes

app.use(aboutRoutes);


// Code before seperating routes to routes folder

// blog routes

// app.get('/', async (req,res) => {
//     //   let blogs = [
//     //     {title: "Arjun", snippet: "Lloremipsummegrgw4gqwq"},
//     //     {title: "Karna", snippet: "Lloremipsummegrgw4gqwq"},
//     //     {title: "Bhima", snippet: "Lloremipsummegrgw4gqwq"},
//     //   ]
//       await Blog.find().sort({createdAt: -1})
//        .then((result)=>{
//         res.render('index', {title:'Home', blogs: result});
//        })
//        .catch((err)=>{
//         res.send(err);
//        })
    
// })


// app.get('/create-blogs', (req,res) => {
//     res.render('create-blogs', {title:'create-blogs'})
// })

// app.post('/create-blogs',(req,res)=>{
//     const blog = new Blog(req.body);
//     blog.save()
//       .then((result)=>{
//          res.redirect('/');
//       })
//       .catch((err)=>{
//          res.send(err);
//       })
// })

// app.get('/blog/:id',(req,res)=>{
//    const id = req.params.id;
//     Blog.findById(id)
//      .then((result)=>{
//       res.render('blog-details', {title: 'blog-details', blog: result})
//      })
//      .catch((err)=>{
//        res.send(err);
//      })
// })

// app.delete('/blog/:id', (req,res)=>{
//    const id = req.params.id;
//    Blog.findByIdAndDelete(id)
//      .then(async (result)=>{
//          res.json({redirect: '/'});
//      })
//      .catch((err)=>{
//         res.send(err);
//      })
// })


// about routes

// app.get('/about', (req,res) => {
//    res.render('about', {title:'about'});
// }) 

// app.get('/about-me', (req,res)=>{
// res.redirect('/about');
// })




// Practising the opearations performed on database



/*
app.get('/add-blog',(req,res) => {
     const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about new one:- Kothadi',
        body: 'my blog is very good blog to read:- Idhi machi bloguuuu'
     });

     blog.save()
      .then((result)=>{
        res.send(result);
      })
      .catch((err)=>{
        res.send(err);
      })
})


app.get('/get-blogs',(req,res)=>{
    Blog.find()
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        res.send(err);
     })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('66ad334e89acc90995658b4e')
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        res.send(err);
     });
})  */

// 404 Route

app.use((req,res) => {
    res.status(404).render('404page', {title:'error'});
})
