const doSync = (sth, time) => new Promise(resolve => {
  setTimeout(() => {
    console.log(sth + '' + time)
    resolve()
  }, time)
})

const doAsync = (sth, time, cb) => {
    setTimeout(() => {
      console.log(sth + '' + time)
      cb && cb()
    }, time)
}

const doElse = (sth) => {
  console.log(sth)
  }

const Scott = { doSync, doAsync }
const Meizi = { doSync, doAsync }

;(async () => {
  console.log('start')
  await Scott.doSync('11', 1000)
  console.log('middle')
  await Meizi.doSync('22',3000)
  console.log('end')
})()