const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/douban-trailer'
const glob = require('glob')
const { resolve } = require('path')
mongoose.Promise = global.Promise

exports.initSchema = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

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