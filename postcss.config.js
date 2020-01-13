module.exports = {
    css: {
        loaderOptions: {
          css: {},
          postcss: {
        plugins: [
          require("postcss-px2rem")({
            rootValue: 50,
            remUnit: 75
          })
        ]
      }
        }
    }
}