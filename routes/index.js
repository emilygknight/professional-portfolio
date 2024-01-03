const router = require('express').Router();
const homeRoutes = require('./homeRoute.js');
const projectRoutes = require('./projects.js');
const aboutRoutes = require('./aboutme.js');
const contactRoutes = require('./contact.js');

router.use('/', homeRoutes);
router.use('/projects', projectRoutes);
router.use('/aboutme', aboutRoutes);
router.use('/contact', contactRoutes);

module.exports = router;