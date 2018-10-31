const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');


const options = {session: false, failWithError: true};

const localAuth = passport.authenticate('local', options);
const jwtAuth = passport.authenticate('jwt', options);

function createAuthToken (user) {
  console.log('what is user?', user, 'vs', { user });
  return jwt.sign(user, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY
  });
}

router.post('/login', localAuth, function (req, res) {
  const authToken = createAuthToken(req.user.toJSON());
return res.json({ authToken });
});

router.post('/refresh', jwtAuth, function(req, res) {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

module.exports = router;

//{"username": "jwtuser", "password":"jwtjwtjwtjwt"}