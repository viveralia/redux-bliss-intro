// Since this is a Node file, we use Node syntax (imports as require, and exports as module.exports)
// For the absolute path, we require path from node
let path = require("path");

// The webpack.config object
module.exports = {
  // Development file (the js file we'll be working with)
  entry: "./main.js",
  // Mode: development, or production (we'll skip that)
  mode: "none",
  // Production file (inside a folder named build, that's where path comes in)
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  }
};
