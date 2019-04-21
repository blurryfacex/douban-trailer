const { readFile }  = require('fs')
const EventEmitter = require('events')

class EE extends EventEmitter {}

const yy = new EE()

yy.on('event', () => {
  console.log('chu dashi le')
})

setTimeout(() => {
  console.log('0 miao')
}, 0)

setTimeout(() => {
  console.log('100 miao')
},100)

setTimeout(() => {
  console.log('200 miao')
}, 200)

readFile('../package.json', 'utf-8', data => {
  console.log('complete 1 callback')
})

readFile('../p')