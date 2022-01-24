const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')
const { config } = require('../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
})

module.exports = jwtStrategy