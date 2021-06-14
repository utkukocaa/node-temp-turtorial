//Modules -Encapsualted Code (only share minimum)
//Common Js, every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
const a = require('./7-mind-granade')


sayHi('utku')
console.log(names.utku)
console.log(names.ali)
console.log(data.singlePerson);
console.log(data.items);
