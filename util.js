exports.md5 = function (input) {
  // hex以十六进制输出
  return require('crypto').createHash('md5').update(input).digest('hex')
}