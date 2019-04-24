const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchema } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']

const useMiddlewares = (app) => {
    R.map(
      R.compose(
        R.forEachObjIndexed(
          initWith => initWith(app)
        ),
        require,
        name => resolve(__dirname, `./middlewares/${name}`)
      )
    )(MIDDLEWARES)
  }

;(async () => {
  await connect()
  initSchema()


  const app = new Koa()
  await useMiddlewares(app)
  app.listen(4555)
})()

// app.use(router.routes()).use(router.allowedMethods())
//
// app.use(views(resolve(__dirname, './views'), {
//   extension: 'pug'
// }))
//
// app.use(async (ctx, next) => {
//   await ctx.render('index', {
//     me: 'luke',
//     you: 'Scoot',
//   })
// })

