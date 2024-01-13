const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/tasks');

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Method Override Middleware for handling PUT and DELETE in forms
app.use(methodOverride('_method'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Home page route
app.get('/', (req, res) => {
    res.render('home'); // Ensure you have a 'home.ejs' in your views directory
});

// Task routes
app.use('/tasks', taskRoutes);

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
