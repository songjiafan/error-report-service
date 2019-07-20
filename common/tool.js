const fs = require('fs')

exports.writePid = function writePid () {
  if (!fs.existsSync('./var')) {
    fs.mkdirSync('./var', 0755)
  }

  fs.writeFileSync('./var/pid', process.pid)
}