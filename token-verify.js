const jwt = require('jsonwebtoken')

const secret = 'myCat'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjb3N0dW1lciIsImlhdCI6MTY0MjUzMzc4OX0.qKPJas0ZCwt0ue9XPXQd6NsWIUiLrjeV1dIXTMQgwH4'

function verifyToken(payload, secret){
  return jwt.verify(payload,secret)
}

const payload = verifyToken(token, secret)
console.log(payload)
