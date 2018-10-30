const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');


const options = {session: false, failWithError: true};

const localAuth = passport.authenticate('local', options);

function createAuthToken (user) {
  console.log('what is user?', user, 'vs', { user });
  return jwt.sign(user, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY
  });
}

router.post('/login', localAuth, function (req, res) {
console.log('endpoint login');
  const authToken = createAuthToken(req.user.toJSON());
return res.json({ authToken });
});

module.exports = router;

//{"username": "jwtuser", "password":"jwtjwtjwtjwt"}