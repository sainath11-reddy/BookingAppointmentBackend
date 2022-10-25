const Booking = require('../models/Booking');

exports.getUsers = (req, res, next) =>{
    Booking.findAll().then(result =>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    })
}

exports.postUser = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const name = req.body.name;

    Booking.create({
        email:email,
        name:name
    }).then(resolve =>{
        console.log("Created with sequelize");
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(resolve.dataValues));
    })
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.bookingId;
    Booking.findByPk(id).then(result =>{
        return result.destroy();
    }).then(resolve =>{
        console.log(`${id}, destroyed`);
    }).catch(err => console.log(err));

}