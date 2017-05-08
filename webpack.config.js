var path = require('path');

module.exports = {
  entry:'./src/app.js',
  output: {
    path: path.join(__dirname,'build'),
    filename: 'app.bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        include: path.join(__dirname,'src'),
        loader:'babel-loader',
  			query: {
  				presets: ['react', 'es2015' , "stage-0"],
          plugins:[
            ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
          ]
  			}
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ],
  },
}
