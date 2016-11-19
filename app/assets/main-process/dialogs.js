const dialog = require('electron').dialog
const fileUtils = require('./fileUtils')
const BrowserWindow = require('electron').BrowserWindow
const currentWindow = BrowserWindow.getFocusedWindow

function loadFromFile () {
  const activeWindow = currentWindow()
  fileUtils.openFile(
    function (fileData) { activeWindow.send('file-open-success', fileData) },
    function (errorMessage) { activeWindow.send('file-open-failure', errorMessage) }
  )
}

module.exports = 
{ loadFromFile
}