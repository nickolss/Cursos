const webpack = require('webpack');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/public',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css", //Nome do arquivo gerado da extração
		})
	],
	module: {
		rules: [
            {
                test: /\.css$/, //Regex para pegar os arquivos .css
                use: [ 
					miniCssExtractPlugin.loader,
                    //'style-loader', //Adiciona o css dentro das tags HTML
                    'css-loader' //interpreta os @import, url() entre outras
                ]
            }
        ],
	},
};
