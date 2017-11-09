const express = require('express')
const MapClass = require('./map.js')
const map = new MapClass({ x: 716, y: 407 })

let currentPixel = null
let currentIndex = 0

newPixel()

const app = express()

app.listen(3000)

app.get('/get/pixel', (req, res) => {
  res.json(currentPixel)

  newPixel()
})

function newPixel() {
  if(currentIndex == map.array.length) currentIndex = 0

  currentPixel = map.array[currentIndex]

  currentIndex++

  if(currentPixel.color == -1) return newPixel()
}