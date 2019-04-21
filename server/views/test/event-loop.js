console.log('123')
setImmediate(() => console.log('3 1'))
setImmediate(() => console.log('3 2'))
setImmediate(() => console.log('3 3'))


setTimeout(() => console.log('timer 1'), 0)
setTimeout(() => {
  console.log('timer 2')
  process.nextTick(() => {
    console.log('next level nextTick 1')
  })
}, 0)
setTimeout(() => console.log('timer 3'), 0)
setTimeout(() => console.log('timer 4'), 0)

process.nextTick(() => console.log('next level nextTick 2'))
process.nextTick(() => {
  console.log('next level nextTick 3')
  process.nextTick(() => console.log('next level nextTick 3 1'))
})
process.nextTick(() => console.log('next level nextTick 4'))