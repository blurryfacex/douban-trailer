const mongoose = require('mongoose')
const db = 'mongodb://173.82.255.6:27017/douban-trailer'
mongoose.Promise = global.Promise

exports.connect = () => {
  if (process.env.NODE_ENV !== 'production'){
    mongoose.set('debug', true)
  }

  mongoose.connect(db, {useNewUrlParser: true}, err => {
    if (err){
      console.log('Connect Error ' + err)
    } else {
      console.log('Connection Success!')
    }
  })

}