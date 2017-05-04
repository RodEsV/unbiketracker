/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	signin: function(req, res) {
    return res.json({ res: 'Signin works!' });
  },

  signup: function(req, res) {

    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, { err: 'Passwords doesn\'t match.' });
    }

    User.create(req.body).exec((err, newUser) => {
      if (err) {
        sails.log(err);
        return res.status(500).json({ error: err });
      }

      return res.status(200).json({ newUser: newUser });
    });

  },

  forgot: function(req, res) {
    return res.json({ res: 'Forgot works!' });
  },

  logout: function(req, res) {
    return res.json({ res: 'Logout works!' });
  }

};

