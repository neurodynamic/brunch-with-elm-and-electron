const ipc = require('electron').ipcMain
const fileUtils = require('./fileUtils')

ipc.on('file-save-dialog', function (event, fileContent) {
  fileUtils.saveToFile(
    fileContent,
    function (fileData) { event.sender.send('file-save-success', fileData) },
    function (errorMessage) { event.sender.send('file-save-failure', errorMessage) }
  )
})

ipc.on('update-file', function (event, filepath, fileContent) {
  fileUtils.writeFile(
    filepath,
    fileContent,
    function (fileData) { event.sender.send('file-save-success', fileData) },
    function (errorMessage) { event.sender.send('file-save-failure', errorMessage) }
  )
})