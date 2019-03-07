const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnvAlreadyDefined = !!process.env.NODE_ENV;

let inDevelopmentMode = false;

if (!nodeEnvAlreadyDefined) {
  dotenv.config();
  inDevelopmentMode = process.env.NODE_ENV === 'development';
}

function setupResolve() {
  if (inDevelopmentMode) {
    return {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    };
  }
  return {};
}

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: `assets/js/[name]${inDevelopmentMode ? '.bundle' : 'bundle.min'}.js`,
    chunkFilename: `assets/js/[name]${inDevelopmentMode ? '.bundle' : 'bundle.min'}.js`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: () => document.querySelector('#base'),
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src/client/styles')],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src/client')],
        options: {
          configFile: './.eslintrc.json',
          // eslint-disable-next-line global-require
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                  modules: false,
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              'styled-components',
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-spread',
              '@babel/proposal-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import',
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.(html|ico|png|jpg|jpeg|svg|gif|otf|ttf)$/,
        include: [path.resolve(__dirname, 'src/client/assets')],
        use: {
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, 'src/client/assets'),
            publicPath: '/',
            name: 'assets/[path][name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter Kit',
      template: './src/client/templates/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
  resolve: setupResolve(),
};
