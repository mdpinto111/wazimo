"devServer": {
  "historyApiFallback": true,
  "proxy": {
    "/": {
      "target" : "http://localhost:3000",
      "secure": false
    }
  }
}