const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'admin 123 .202'
  const hash = '$2b$10$7xj9qUFWY61z5BCx6Junmu3nYqnyV.Fq/BaEawUvZSvypw2JFTXkG'
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword()
