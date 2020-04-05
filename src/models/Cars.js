const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    conductor: {
        type: String,
        required: true,
        unique: true
    },
    license_plate: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model("Cars", CarsSchema);
