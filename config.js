'use strict';

require('dotenv').config();

// module.exports = {
//   PORT: process.env.PORT || 8080,
//   MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/noteful',
//   TEST_MONGODB_URI: process.env.TEST_MONGODB_URI || 'mongodb://localhost/noteful-test',
//   JWT_SECRET: process.env.JWT_SECRET,
//   JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
// };
exports.PORT=process.env.PORT || 8080;
exports.MONGODB_URI= process.env.MONGODB_URI || 'mongodb://localhost/noteful';
exports.TEST_MONGODB_URI= process.env.TEST_MONGODB_URI || 'mongodb://localhost/noteful-test';
exports.JWT_SECRET= process.env.JWT_SECRET;
exports.JWT_EXPIRY= process.env.JWT_EXPIRY || '7d';
