// dependencies for project

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var simpleExtend = require('postcss-extend')
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")
var postcssnested = require('postcss-nested')

// css to be processed
var css = fs.readFileSync("src/delight.css", "utf8")

// process css
var output = postcss([autoprefixer])
 .use(atImport())
 .use(simpleExtend())
 .use(postcssnested())
 .use(cssvariables())
 .use(conditionals())
 .use(customMedia())
 .process(css, {
   from: "./src/delight.css",
   to: "./css/delight.css"
 })
 .css

fs.writeFile("css/delight.css", output, 'utf-8')

// Using Sqwish for CSS
new compressor.minify({
  type: 'sqwish',
  fileIn: './css/delight.css',
  fileOut: './css/delight.min.css'
})
