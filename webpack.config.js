// var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './www/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {　　　　　　
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            },
            { //处理图片
                test: /\.(jpg|png|gif|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    // plugins: [
    //     new htmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: 'index.html',
    //         inject: 'body',
    //     })
    // ]
}