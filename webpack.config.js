const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
	const developmentMode = argv.mode === 'development';
	console.log('developmentMode:', developmentMode);

	return {
		entry: {
			bundle: './src/ts/index.ts',
			svgsprite: './src/ts/svg-sprite.ts',
		},

		resolve: {
			extensions: ['.ts', '.js'],
		},

		output: {
			path: __dirname + '/dist',
			filename: '[name].js',
		},

		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					// sourceMap: true // set to true if you want JS source maps
				}),
				new OptimizeCSSAssetsPlugin({}),
			],
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: 'ts-loader',
				},
				{
					test: /\.(handlebars|hbs)$/,
					use: [
						{
							loader: 'handlebars-loader',
						},
						{
							loader: 'extract-loader',
						},
						{
							loader: 'html-loader',
							options: {
								minimize: false,
								interpolate: true,
							},
						},
					],
				},
				{
					test: /\.svg$/,
					use: ['svg-sprite-loader', 'svgo-loader'],
				},
				{
					test: /\.scss$/,
					use: [
						developmentMode
							? {
									loader: 'style-loader',
									options: {
										sourceMap: true,
									},
							  }
							: {
									loader: MiniCssExtractPlugin.loader,
							  },

						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								ident: 'postcss',
								plugins: () => [
									postcssPresetEnv({
										browsers: 'last 2 versions',
										autoprefixer: true,
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(jpg|png|ico|mp4)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'img/',
								publicPath: 'img/',
							},
						},
					],
				},
				{
					test: /\.(woff|ttf|eot)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/',
								publicPath: 'fonts/',
							},
						},
					],
				},
			],
		},

		plugins: [
			// handlebars template engine
			new webpack.LoaderOptionsPlugin({
				options: {
					handlebarsLoader: {},
				},
			}),
			// extractPlugin
			new MiniCssExtractPlugin({
				filename: 'main.css',
				chunkFilename: 'chunk.css',
			}),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './src/index.hbs',
				minify: false,
			}),
			// new HtmlWebpackPlugin({
			//   filename: 'all-templates.html',
			//   template: './src/all-templates.hbs',
			//   minify: false,
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
			}),
		],
	};
};
