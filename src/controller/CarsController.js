const mongoose = require('mongoose');

const Cars = mongoose.model('Cars');

module.exports = { 

    async index(req, res) {
        const response = await Cars.find()
        if (response.length === 0) {
            return res.send("No cars in registers!")
        }
        return res.json(response);
    },

    async store(req, res) {
        const newCar = new Cars(req.body);
        newCar.save(function(err, Car) {
            if (err) {
                const { message } = err.errors.description
                return res.json(message);
            }
            res.send('Car was created successfully!');
        });

    },
    async SearchEngine(req, res) {
        const { license_plate } = req.params;
        const response = await Cars.find({ "license_plate": license_plate });

        if (response.length === 0) {
            return res.send("Can't find this car!")
        }
        return res.json(response);
    },
    async removeCar(req, res) {

        const { license_plate } = req.params;
        const response = await Cars.find({ "license_plate": license_plate });

        response.map(async item => {
            await Cars.findByIdAndDelete({ "_id": item._id  }, (err) => {
                if (err) {
                    return res.json(err);
                }
                return res.json("Car removed successfuly");
            });
        });
    }
};