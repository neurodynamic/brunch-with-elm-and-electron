module.exports = {
  config: {
    // hot: true,
    paths: {
      watched: ["app"]
    },
    files: {
      javascripts: {
        joinTo: "renderer-process/app.js"
      },
      stylesheets: {
        joinTo: "renderer-process/app.css"
      }
    },
    plugins: {
      elmBrunch: {
        mainModules: ["app/elm_components/Main.elm"],
        outputFolder: "public/renderer-process/",
        // makeParameters : ['--debug']
      },
      sass: {
        mode: "native"
      }
    }
  }
};