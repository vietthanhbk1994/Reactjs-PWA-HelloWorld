var config = {
  // package the import file
  entry: './public/src/index.js',

  // Configure the package results, path define the output folder,
  // and filename define the name of the package result file
  output: {
    path: __dirname + '/public/client/',
    publicPath: '/',
    filename: 'bundle.js'
  },

  // Set the server port number
  devServer: {
    inline: true,
    port: 7777,
    contentBase: './public/client'
  },

  // configure the processing logic of the module and define the loader with the loaders
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
