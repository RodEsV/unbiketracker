/**
 * BikeController
 *
 * @description :: Server-side logic for managing bikes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*
* "serial": "xasklnakjsnlansnldasda",
 "brand": "ardidas",
 "model": "chiquito",
 "color": "blaco con negro",
 "description": "una bicicleta muy misifus",
 "diameterRim": "10",
 "unitDiameterRim": "cm",
 "dateBought": "2015-03-18T00:00:00.000Z",
* */

module.exports = {
  find: function (req, res) {
    Bike.find().exec((err, bikes) => {
      if(err){
        return res.status(500).json({err: err});
      }
      return res.status(200).json({bikes: bikes})
    });
  },

  create: function (req, res) {
    Bike.create(req.body).exec((err, newBike) => {
      if(err){
        return res.status(500).json({ err: err});
      }
      return res.status(200).json({newBike: newBike})
    })
  },

  update: function (req, res) {
    Bike.findOne({serial: req.params.id}).exec((err, bike) => {
      if(err)
        return res.status(500).json({err: err});
      else if (!bike)
        return res.status(200).json({ message: "Bike with Serial " + req.params.id + " not found"})
      let data = req.body;
      Bike.update( {serial: req.params.id, data}).exec((err, bikeUpdated) => {
        if(err)
          return res.status(500).json({err: err})
        return res.status(200).json({ bikeUpdated: bikeUpdated})
      })

    })
  },

  destroy: function(req, res) {

    Bike.findOne({ serial: req.params.serial }).exec((err, bike) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      if (! bike) {
        return res.status(200).json({ message: 'Bike not found with ID ' + req.params.serial });
      }

      Bike.destroy({ serial: req.params.serial }).exec((err, bikeDeleted) => {
        if (err) {
          return res.status(500).json({ err: err });
        }

        return res.status(200).json({ userDeleted: bikeDeleted });
      });
    });
  }
};

