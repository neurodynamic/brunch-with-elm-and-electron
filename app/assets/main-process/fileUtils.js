// ELECTRON SAVING REFERENCE: http://ourcodeworld.com/articles/read/106/how-to-choose-read-save-delete-or-create-a-file-with-electron-framework
// INTEROP REFERENCE: https://guide.elm-lang.org/interop/javascript.html

const dialog = require('electron').dialog
const fs = require('fs')

// SAVING FILE
function saveToFile (content, success, failure) {
  const options = {
    title: 'Save your text!',
    filters: [
      { name: 'Text', extensions: ['txt'] }
    ]
  }

  dialog.showSaveDialog(options, function (filepath) {
    if (filepath === undefined){
      return
    }

    // filepath is a string that contains the path and filepath created in the save file dialog.  
    writeFile(filepath, content, success, failure)
  }); 
}

function writeFile(filepath, fileContent, success, failure) {
  fs.writeFile(filepath, fileContent, function (err) {
    if(err){
      return failure(err.message)
    } else {
      return success({filepath, fileContent})
    }
  }); 
}

// READING FILE
function openFile (success, failure) {
  dialog.showOpenDialog(function (filepaths) {
    // filepaths is an array that contains all the selected
    if(filepaths === undefined){
      return
    }

    fs.readFile(filepaths[0], 'utf-8', function (err, content) {
      if(err){
        failure(err.message);
      } else {
        success({filepath: filepaths[0], fileContent: content});
      }
    });
  });
}

// UPDATING FILE
function updateFile (filepath, content, failure, success) {
  fs.writeFile(filepath, content, function (err) {
    if(err){
      failure(err.message);
    } else {
      success(filepath);
    }
  });
}

module.exports = {
  saveToFile,
  openFile,
  updateFile,
  writeFile
}