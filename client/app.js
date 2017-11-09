const Worker = require('./worker.js')
const worker = new Worker('localhost:3000')

worker.step()