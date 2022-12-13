const Proclamair = require('../modals/proclamair')
const Admin = require('../modals/admin')

const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.SecretOrKey = process.env.password


passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    Proclamair.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  }),
)

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  }),
)
