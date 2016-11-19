const ipc = require('electron').ipcRenderer

function setupElmPortListeners (elmApp) {

  // When Elm says to save a file, send a 
  // file save dialog event to main process
  elmApp.ports.saveToFile.subscribe(function(content) {
    ipc.send('file-save-dialog', content)
  });

  // When Elm says to update a file, send a 
  // file update event to main process
  elmApp.ports.updateFile.subscribe(function(data) {
    ipc.send('update-file', data.filepath, data.fileContent)
  });
}

module.exports = {
  setupElmPortListeners
}