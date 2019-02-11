const Car = require('../models/carModel')

exports.test = (req, res) => {
    res.send('Test Controller')
}

exports.getCars = (req, res) => {
    Car.find((err, car) => {
        if (err) return next(err)
        res.send(car)
    })
}

exports.addCar = (req, res) => {
    let car = new Car ({
        name: req.body.name,
        color: req.body.color,
        date: req.body.date
    })

    car.save((err) => {
        if (err) return next(err)
        res.send('Adding car complete!')
    })
}

exports.getCarById = (req, res) => {
    Car.findById(req.params.id, (err, car) => {
        if (err) return next(err)
        res.send(car)
    })
}

exports.delCar = (req, res) => {
    Car.findByIdAndRemove(req.params.id, (err) =>{
        if (err) return next(err)
        res.send('Delete car complete')
    })
}

exports.updateCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
        if(err) return next(err)
        res.send('Updated car complete!')
    })
}