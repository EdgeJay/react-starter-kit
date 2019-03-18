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
  const resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };

  if (inDevelopmentMode) {
    resolve.alias = {
      'react-dom': '@hot-loader/react-dom',
    };
  }

  return resolve;
}

function getBabelOptions(isBabelLoader = true) {
  const options = {
    babelrc: false,
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
      [
        'styled-components',
        {
          displayName: inDevelopmentMode,
          ssr: true,
        },
      ],
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-spread',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel',
    ],
  };

  if (isBabelLoader) {
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    options.cacheDirectory = true;
  }

  return options;
}

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/client/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: `assets/js/[name]${inDevelopmentMode ? '.bundle' : '.bundle.min'}.js`,
    chunkFilename: `assets/js/[name]${inDevelopmentMode ? '.bundle' : '.bundle.min'}.js`,
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
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelOptions: getBabelOptions(false),
          babelCore: '@babel/core',
        },
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
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
          formatter: 'grouped',
        },
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: getBabelOptions(),
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
      favicon: './src/client/assets/img/favicon.ico',
      minify: !inDevelopmentMode,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: setupResolve(),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'source-map',
};
