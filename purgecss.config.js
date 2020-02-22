module.exports = {
  content: [
    './src/index.html',
    './src/**/*.tsx'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
}
