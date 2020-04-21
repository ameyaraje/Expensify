const path = require('path');
const miniCSSPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProd = env === 'production';
    const cssExtract = new miniCSSPlugin({
        filename: 'styles.css'
    });
    
    return {
        entry: './src/app.js',
        output: {
            // path: '/Users/ameyaraje/Desktop/ReactJS/React-Experiments/indecision-app/public',
            // usage of 'path' makes more sense so the project is portable
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    miniCSSPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            cssExtract
        ],
        devtool: isProd ? 'source-map': 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};