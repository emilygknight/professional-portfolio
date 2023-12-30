const homeRoutes = require('./routes/homeRoute.js');
const projectRoutes = require('./routes/projects.js');
const aboutRoutes = require('./routes/aboutme.js');
const contactRoutes = require('./routes/contact.js');

app.use('/', homeRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);