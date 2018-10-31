const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('../config');

const options = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    algorithms: ['HS256']
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
    done(null, payload.user);
})

module.exports = jwtStrategy;