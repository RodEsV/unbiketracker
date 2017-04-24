/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
    Device.create(req.body).exec((err, newDevice) => {
      if(err)
        return res.status(500).json({ err: err})
      return res.status(200).json({ newDevice: newDevice})
    })
  },

  find: function (req, res) {
	  Device.find().exec((err, devices) => {
	    if(err)
	      return res.status(500).json({err: err})
      return res.status(200).json({devices: devices})
    })
  },

  update: function (req, res) {
	  Device.findOne({serial: req.params.id}).exec((err, device ) => {
	    if(err)
	      return res.status(500).json({err: err})
      else if(!device)
        return res.status(404).json({message: "Device with id " + req.params.id + " not found"})
    });
	  data = req.body
    Device.update({serial: req.params.id}, data).exec((err, updatedDevice) =>{
	    if(err)
	      return res.status(500).json({err: err})
      return res.status(200).json({updatedDevice: updatedDevice})
    })
  },

  destroy: function (req, res) {
    Device.findOne({serial: req.params.id}).exec((err, device) => {
      if(err)
        return res.status(500).json({err: err})
      else if(!device)
        return res.status(404).json({message: "Device with id " + req.params.id + " not found"})
      data = req.body
      Device.destroy({serial: req.body.id}).exec((err, deletedDevice) => {
        if(err)
          return res.status(500).json({err: err})
        return res.status(200).json({deletedDevice: deletedDevice})
      })
    })
  }
};

