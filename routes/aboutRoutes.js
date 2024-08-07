const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController')

// 1) About view:- getAbout
router.get('/about', aboutController.getAbout); 

// 2) redirect to about view:- getAboutme
router.get('/about-me', aboutController.getAboutme);

module.exports = router;