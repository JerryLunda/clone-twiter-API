const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const { Strategy } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret_key"
};

passport.use(new Strategy(opts, function(jwt_pay_load, done){
    return done(null, jwt_pay_load)
}))

module.exports = passport