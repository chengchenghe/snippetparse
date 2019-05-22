#!/usr/bin/env node

// import package
const { snippetparse } = require('./snippetparse')

// cli
const argv = global.process.argv

if (argv.indexOf('-f') > -1 || argv.indexOf('-of') > -1) {
  // basic process.cwd()
  let filePath, outFilePath

  argv.forEach((e, idx) => {
    if (e.startsWith('-f')) {
      filePath = argv[++idx]
    }
    if (e.startsWith('-of')) {
      outFilePath = argv[++idx]
    }
  })

  outFilePath = outFilePath ? outFilePath : filePath

  // handle function
  snippetparse(filePath, outFilePath)
}