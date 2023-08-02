const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        ),
        new MiniCSSExtractPlugin()
    ]
}