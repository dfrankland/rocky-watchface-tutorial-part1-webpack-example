import webpack from 'webpack';
import webpackConfig from './webpack.config';

webpack(webpackConfig).run(
  (error, stats) => {
    if (error) throw error;
    console.log(stats.toString(webpackConfig.stats));
  }
);
