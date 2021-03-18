const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const loader = require('sass-loader');

const isDevelopment = process.env.NODE_ENV !== 'production'; //variavel de ambiente que irá chegar se estamos em production ou development

module.exports = {
    mode: isDevelopment ? 'development' : 'production', // if ternário para validar se o ambiente é production ou development
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // if ternário para validar se estivermos em dev usaremos o eval-source-map, caso seja PRD usamos source-map
	entry: path.resolve(__dirname, "src", "index.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
		hot: true,
    },
    plugins: [
		isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							isDevelopment && require.resolve('react-refresh/babel')
						].filter(Boolean)
					}
				},
			},
            {
                test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
            }
		],
	}
};