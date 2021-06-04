const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/news',siteController.NewsIndex)
router.use('/search',siteController.SearchIndex)

module.exports = router;