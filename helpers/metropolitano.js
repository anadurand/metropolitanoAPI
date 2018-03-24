var db = require('../models');

/*  exports.insertRegular = function (req, res) {
    // seed database
    const regulares = [
        {
            name: 'A',
            category: 'regular',
            schedule: ['Lun a vie de 5:00 am a 11:00pm','Sabados de 5:00am a 10:45pm','Domingos de 5:15 am ta 10:00pm'],
        },
        {
            name: 'B',
            category: 'regular',
            schedule: ['Lun a vie de 5:00 am a 11:00pm','Sabados de 5:00am a 10:45pm','Domingos de 5:15 am ta 10:00pm'],
        },
        {
            name: 'C',
            category: 'regular',
            schedule: ['Lun a vie de 5:00 am a 11:00pm','Sabados de 5:00am a 10:45pm','Domingos de 5:15 am ta 10:00pm'],
        },
        {
            name: 'D',
            category: 'regular',
            schedule: ['Lun a vie de 5:00 am a 11:00pm','Sabados de 5:00am a 10:45pm','Domingos de 5:15 am ta 10:00pm'],
        },
    ];

    db.Regular.insertMany(regulares, function (err, r) {
        //res.json({hola: 'data ingresada correctamente' });
    });
} */


exports.getRegular = function (req, res) {
    db.Regular.find()
        .then(function (regular) {
            res.json(regular);
        })
        .catch(function (err) {
            res.send(err);
        });
}

module.exports = exports;