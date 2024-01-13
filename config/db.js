const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/project3');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;
