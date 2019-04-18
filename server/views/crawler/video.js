const puppeteer = require('puppeteer')
const url = 'https://movie.douban.com/tag/#/?sort=R&range=6,10&tags='
const doubanId = '219491'
const videoBase = 'https;//movie.douban.com/trailer/219491'

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
  })

;(async () => {
  console.log('start viest thi starget page')

  const browser = await puppeteer.launch({
    args: ['--no-sanbox'],
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  await sleep(3000)



  const result = await page.evaluate(() => {
    var $ = window.$
    var it = $('.related-pic-video')

    if (it && it.length > 0) {
      var link = it.attr('href')
      var cover = it.find('img').attr('src')

      return {
        link,
        cover
      }
    }
    return {}
  })
  let video

  if (result.link) {
    await page.goto(result.link, {
      waitUntil: 'newworkidle2'
    })
    await sleep(200)

    video = await page.evaluate(() => {
      var $ = window.$
      var it = $('source')

      if (it && it.length > 0) {
        return it.attr('src')
      }
      return ''
    })
  }

  const data = {
    video, doubanId, cover: result.cover
  }

  browser.close()

  process.send({result})
  process.exit(0)

})()