const axios = require('axios')
const robot = require('robotjs')

class Worker {
  constructor(host) {
    this.host = host

    this.colors = [
      { x: 573, y: 795 },
      { x: 615, y: 795 },
      { x: 657, y: 795 },
      { x: 699, y: 795 },
      { x: 741, y: 795 },
      { x: 783, y: 795 },
      { x: 825, y: 795 },
      { x: 867, y: 795 },
      { x: 909, y: 795 },
      { x: 951, y: 795 },
      { x: 993, y: 795 },
      { x: 1035, y: 795 },
      { x: 1077, y: 795 },
      { x: 1119, y: 795 },
      { x: 1161, y: 795 },
      { x: 1203, y: 795 },
      { x: 1245, y: 795 },
      { x: 1287, y: 795 },
      { x: 1329, y: 795 }
    ]

    robot.setMouseDelay(2)
  }

  async requestPixel() {
    const response = await axios.get(`http://${this.host}/get/pixel`)

    return response.data
  }

  color(num) {
    this.click(this.colors[num].x, this.colors[num].y)
  }

  click(x, y) {
    robot.moveMouse(x, y)

    robot.mouseClick()
  }

  place() {
    this.click(907, 797)
  }

  async step() {
    const result = await this.requestPixel()

    console.log(result)

    this.color(result.color)
    this.click(result.x, result.y)
    this.place()

    setTimeout(() => this.step(), 61000)
  }
}

module.exports = Worker