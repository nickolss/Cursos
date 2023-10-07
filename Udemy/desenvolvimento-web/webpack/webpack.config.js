const modoDesenvolvimento = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: modoDesenvolvimento ? 'development' : 'production',
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/public',
	},
	devServer: {
		static: {
			directory: "./public"
		},
		port: 9000,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css', //Nome do arquivo gerado da extração
		}),
	],
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/, //Regex para pegar os arquivos .css
				use: [
					MiniCssExtractPlugin.loader,
					//'style-loader', //Adiciona o css dentro das tags HTML
					'css-loader', //interpreta os @import, url() entre outras
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
};
