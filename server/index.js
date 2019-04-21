const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchema } = require('./database/init')

;(async () => {
  await connect()

  initSchema()

  const Movie = mongoose.model('Movie')
  const movies = await Movie.find({})

  console.log(movies)
})()

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    me: 'luke',
    you: 'Scoot',
  })
})

app.listen(4555)