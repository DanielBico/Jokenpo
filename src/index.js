const options = require('./data')
const User = require('./controler/class/user')

let jogar = new User({ opt: options }).game()

jogar
