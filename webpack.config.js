const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    vender: './src/vender/index.js',
    mb: ['./src/mb/index.jsx', './src/mb/index.html']
  },

  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[id].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      octicons: path.resolve(__dirname, './src/vendor/octicons')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modeles/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        }),
        include: /node_modeles/
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader?name=assets/images/[name].[ext]&&limit=10240']
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: ['file-loader?name=assets/fonts/[name].[ext]']
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          'html-loader'
        ]
      }
    ]
  },
  devtool: devMode ? 'source-map' : false,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vender'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      recompose: 'recompose'
    }),
    new ExtractTextPlugin('assets/css/[name].css')
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: false,
    watchOptions: {
      poll: false
    },
    proxy: {
      '/api': {
        target: 'http://api.douban/com/v2',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      }
    }
  }

};
