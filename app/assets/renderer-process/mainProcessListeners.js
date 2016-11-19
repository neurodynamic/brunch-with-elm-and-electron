const ipc = require('electron').ipcRenderer

function setupMainProcessListeners (elmApp) {
  // When save location is selected, trigger Elm action to set filename
  ipc.on('trigger-save', function (event) {
    elmApp.ports.triggerSave.send("")
  })

  // Show file save dialog when file open is triggered in Elm
  ipc.on('file-save-dialog', function (event, fileContent) {
    FileUtils.saveToFile(
      fileContent,
      function (fileData) { event.sender.send('file-save-success', fileData) },
      function (errorMessage) { event.sender.send('file-save-failure', errorMessage) }
    )
  })

  // When file save is successful, trigger Elm save success port
  ipc.on('file-save-success', function (event, fileData) {
    elmApp.ports.saveSuccess.send(fileData)
  })

  // When file save fails, trigger Elm save failure port
  ipc.on('file-save-failure', function (event, errorMessage) {
    elmApp.ports.saveFailure.send(errorMessage)
  })

  // Show file open dialog when file open is triggered in Elm
  ipc.on('file-open-dialog', function (event) {
    FileUtils.openFile(
      function (fileData) { event.sender.send('file-open-success', fileData) },
      function (errorMessage) { event.sender.send('file-open-failure', errorMessage) }
    )
  })

  // When file open is successful, trigger Elm open success port
  ipc.on('file-open-success', function (event, fileData) {
    elmApp.ports.openSuccess.send(fileData)
  })

  // When file open fails, trigger Elm open failure port
  ipc.on('file-open-failure', function (event, errorMessage) {
    elmApp.ports.openFailure.send(errorMessage)
  })
}

module.exports = {
  setupMainProcessListeners
}