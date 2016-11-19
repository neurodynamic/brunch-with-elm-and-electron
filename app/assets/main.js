'use strict'
const path = require('path')
const glob = require('glob')
const electron = require('electron')

function inDevelopmentMode () {
  return process.env.NODE_ENV == "development"
}

let files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
files.forEach(function (file) {
  require(file)
})

const app = electron.app // this is our app
const BrowserWindow = electron.BrowserWindow // This is a Module that creates windows  

let mainWindow // saves a global reference to mainWindow so it doesn't get garbage collected

app.on('ready', createWindow) // called when electron has initialized

// This will create our app window, no surprise there
function createWindow () {
  let startWidth
  
  if (inDevelopmentMode()) {
    startWidth = 800
  } else {
    startWidth = 600
  }
  
  mainWindow = new BrowserWindow({
    width: startWidth, 
    height: 490
  })

  // display the index.html file
  mainWindow.loadURL(`file://${ __dirname }/index.html`)

  // open dev tools by default so we can see any console errors
  if (inDevelopmentMode()) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

/* Mac Specific things */

// when you close all the windows on a non-mac OS it quits the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
})

// if there is no mainWindow it creates one (like when you click the dock icon)
app.on('activate', () => {
  if (mainWindow === null) { createWindow() }
})
