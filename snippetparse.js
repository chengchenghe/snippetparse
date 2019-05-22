const fs = require('fs')
const { join } = require('path')
const readline = require('readline')

/**
 * 执行代码转化为代码块
 * @param {String} inputPath 目标文件地址
 * @param {String} outputPath 输出代码块文件地址
 * @param {Object} snippet 代码块模板配置
 */
const handleParse = (inputPath, outputPath, snippet) => {
  // 使用工具
  let input, output, readlineInterface

  input = fs.createReadStream(inputPath)
  output = fs.createWriteStream(outputPath)
  readlineInterface = readline.createInterface({ input: input, output: output })

  readlineInterface.on('line', line => {
    snippet.body.push(line)
  })

  readlineInterface.on('close', () => {
    if (!snippet.body.length) {
      console.log(`[ERROR OR EMPTY FILE! ${new Date().toLocaleString()}]:${inputPath}`)
    } else {
      // 将title移动到对象的键名位置,移除最终输出字符串对象的包裹{}
      let keyTitle = snippet.title
      delete snippet.title
      snippet = JSON.stringify(snippet, null, 2)
      let outcontent = `"${keyTitle}": ${snippet}`
      // 写入文件中
      output.write(outcontent)
      // 结束
      console.log(`[SUCCESS ${new Date().toLocaleString()}]:${outputPath}`)
    }
  })

}

/**
 * 将文件中的代码转为代码块(会生成.snippet文件)
 * @param {String} filePath 文件路径(基于执行地址-pwd)
 * @param {String} outSnippetPath 输出文件路径,默认在文件路径同级生成.snippet文件
 */
const snippetparse = (filePath, outSnippetPath) => {
  if (!filePath) {
    throw new Error('请传入filePath参数')
  }
  // 自动适配地址
  if (filePath.startsWith('.') || !filePath.startsWith('/')) {
    // 混合:当前执行地址的路径
    filePath = join(process.cwd(), filePath)
  }
  let inputPath = filePath
  let outputPath = outSnippetPath ? `${outSnippetPath}.snippet` : `${inputPath}.snippet`
  let snippet = {
    title: 'title_' + Math.floor(Math.random() * 1000000),
    prefix: 'prefix',
    description: 'description --powered by snippetparse',
    body: []
  }
  handleParse(inputPath, outputPath, snippet)
}

module.exports = { snippetparse }