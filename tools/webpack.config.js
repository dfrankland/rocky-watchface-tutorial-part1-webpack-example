import webpack from 'webpack';
import { resolve as resolvePath } from 'path';

export default {
  target: 'node',

  context: resolvePath(__dirname, '../src'),

  entry: ['./index.js'],

  output: {
    path: resolvePath(__dirname, '../build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolvePath(__dirname, '../src'),
        ],
        query: {
          cacheDirectory: false,
          babelrc: false,
          presets: [
            'es2015',
            'stage-0',
          ],
          plugins: [
            'transform-runtime',
          ],
        },
      },
    ],
  },

  resolve: {
    root: resolvePath(__dirname, '../src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  cache: true,
  debug: true,

  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  externals: [{ rocky: true }],

  devtool: false,
};
