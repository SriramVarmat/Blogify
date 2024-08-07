

// 1) About view:- getAbout
const getAbout = (req,res) => {
    res.render('about', {title:'about'});
}

// 2) redirect to about view:- getAboutme

const getAboutme = (req,res) => {
    res.redirect('/about');
}


module.exports = {
    getAbout,
    getAboutme
}