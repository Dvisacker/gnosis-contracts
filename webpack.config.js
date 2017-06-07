module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/gnosis.js',
    library: 'gnosis',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.json$/,
        use: [{ loader: 'json-loader' }],
      },
      {
        test: /\.sol$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'truffle-solidity-loader?network=development' },
        ],
      }
    ],
  },
};
