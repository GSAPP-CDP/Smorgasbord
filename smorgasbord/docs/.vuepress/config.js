module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  }
}
