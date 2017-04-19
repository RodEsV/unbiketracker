/**
 * BikeController
 *
 * @description :: Server-side logic for managing bikes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
};

