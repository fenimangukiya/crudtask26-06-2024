const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://mangukiyafeni8:I3SU6TqW5xifsFBN@cluster0.mhvyxu5.mongodb.net/').then((data) => {
        if(data) {
            console.log('database connect successfully');
        }
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB