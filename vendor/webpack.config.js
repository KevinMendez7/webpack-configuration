const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      //Aqui van los loaders
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'video/[name].[hash].[ext]'
          }
        }
      },
      // {
      //   test: /\.json$/,
      //   use: 'json-loader'
      // },
      {
        // test: que tipo de archivo quiero reconocer ,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        // test: que tipo de archivo quiero reconocer ,
        // use: que loader se va a encargar del archivo
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      },
      {
        // test: que tipo de archivo quiero reconocer ,
        // use: que loader se va a encargar del archivo
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader',{
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }]
        })
      },
      {
        // test: que tipo de archivo quiero reconocer ,
        // use: que loader se va a encargar del archivo
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ],
  optimization:{
    splitChunks:{
      name: "vendor",
      chunks: "initial",
      minChunks: Infinity
    }
  }
}
