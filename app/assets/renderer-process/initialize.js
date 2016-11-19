// REFERENCE: http://mbpfefferle.com/2016/10/14/elm-interop
// REFERENCE: https://guide.elm-lang.org/interop/javascript.html

const setupElmPortListeners =
  require('./elmPortListeners').setupElmPortListeners
const setupMainProcessListeners =
  require('./mainProcessListeners').setupMainProcessListeners


const elmApp = Elm.Main.fullscreen()

setupElmPortListeners(elmApp)
setupMainProcessListeners(elmApp)