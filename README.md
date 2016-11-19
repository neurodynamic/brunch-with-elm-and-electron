# Brunch With Elm (and Electron!)
Brunch With Elm & Sass & Electron

Adapted from [Brunch with Elm](https://github.com/alaister/brunch-with-elm)

## Version 2
Updated for Elm 0.18, populated with file saving and loading example code to demo basic interop between Elm and Electron, and between the Electron renderer process and main process.

## Getting Started

* Build new Brunch project
    * `brunch new project_name -s neurodynamic/brunch-with-elm-and-electron`

* Install
    * `npm install`
    * `elm package install`
    
* Run in browser
    * `npm start`
    
* Run as Electron app
    * `npm run electron`

* Upgrade Electron version
- `rm -rf ~/.electron`
- `sudo npm install -g electron`

* Package for Mac
- `electron-packager public "Name of App" --platform=darwin`

## Note
You may see a "WebSocket connection failed" error on starting electron. This does not seem to affect the app in any way, and goes away after the first hot-reload.