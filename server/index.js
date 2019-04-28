const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchema } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']
import config from '../config'

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

async function start () {
  const app = new Koa()
  const { port } = config

  await useMiddlewares(app)
  const server = app.listen(port, () => {
    console.log('start')
  })
}
start()
