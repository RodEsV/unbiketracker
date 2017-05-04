/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {

  },

  findOne: function(req, res) {
	  User.findOne({ id: req.params.id }).exec((err, usr) => {
	    if (err) {
	      return res.status(500).json({ err: err});
      }

      if (user) {
	      return res.status(200).json({ user: user});
      } else {
        return res.status(200).json({ message: 'User not found with ID ' + req.params.id });
      }
    });
  },

  create: function() {

  },

  update: function() {

  },

  destroy: function() {

  }
};

