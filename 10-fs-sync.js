const {readFileSync, writeFileSync} = require('fs'); 
console.log('start')

//const fs = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(typeof first, second);

let regex = /hel./ig

console.log(first.match(regex))

writeFileSync('./content/result-syn.txt',
`Here is the result : ${first},${second}`,
{flag: 'a'}

)


console.log('done with this task');
console.log('startting the next one');



