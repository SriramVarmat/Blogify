const Blog = require('../models/blogs');

// 1) Get all blogs(index view):- blogIndex

const blogIndex = async (req,res) => {
    //   let blogs = [
    //     {title: "Arjun", snippet: "Lloremipsummegrgw4gqwq"},
    //     {title: "Karna", snippet: "Lloremipsummegrgw4gqwq"},
    //     {title: "Bhima", snippet: "Lloremipsummegrgw4gqwq"},
    //   ]
    await Blog.find().sort({createdAt: -1})
    .then((result)=>{
     res.render('index', {title:'Home', blogs: result});
    })
    .catch((err)=>{
     res.send(err);
    })
}


// 2) Get create-blog page(form):- getCreateblog

const getCreateblog = (req,res) => {
    res.render('create-blogs', {title:'create-blogs'})
}


// 3) Post new blog on submit:- postCreateblog

const postCreateblog = (req,res) => {
    const blog = new Blog(req.body);
    blog.save()
      .then((result)=>{
         res.redirect('/');
      })
      .catch((err)=>{
         res.send(err);
      })
}


// 4) Get single blog based on id(details view):-  getBlogDetail

const getBlogDetail = (req,res) => {
    const id = req.params.id;
     Blog.findById(id)
      .then((result)=>{
       res.render('blog-details', {title: 'blog-details', blog: result})
      })
      .catch((err)=>{
        res.status(404).render('404page', {title:'error'});
      })
}

// 5) Delete single blog based on id:-  deleteBlogDetail

const deleteBlogDetail = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result)=>{
          res.json({redirect: '/'});
      })
      .catch((err)=>{
         res.send(err);
      })
}

module.exports = {
    blogIndex,
    getCreateblog,
    postCreateblog,
    getBlogDetail,
    deleteBlogDetail
}