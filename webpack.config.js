const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
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
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NVM_HOME": JSON.stringify(process.env.NVM_HOME)
            }
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}