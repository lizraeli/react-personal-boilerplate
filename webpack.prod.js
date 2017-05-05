const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'client/Index.js'),
  output: {
    path: path.resolve(__dirname, 'build/bundle/'),
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react"],
            plugins: ["transform-object-rest-spread"]
          },
        
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }]
      },
      {
        test: /\.png$/i,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'icons/'
          }
        }]
      },
    ]
  }
}