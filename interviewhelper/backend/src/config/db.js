const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
    }
    catch (err) {
        console.error(' Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;