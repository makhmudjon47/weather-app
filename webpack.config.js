const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const webpack = require('webpack')
const MyCustomPlugin = require('./plugins/CustomPlugin')

require('dotenv').config()

module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: 'index.css'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "PORT": JSON.stringify(process.env.PORT),
                "API_KEY_OPENWEATHER": JSON.stringify(process.env.API_KEY_OPENWEATHER),
                "API_KEY_GEOLOCATION": JSON.stringify(process.env.API_KEY_GEOLOCATION),
                "API_KEY_TIMEZONE": JSON.stringify(process.env.API_KEY_TIMEZONE),
                "TAILWIND_MODE": JSON.stringify(process.env.TAILWIND_MODE),
            }
        }),
        new MyCustomPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 8080
    }
}