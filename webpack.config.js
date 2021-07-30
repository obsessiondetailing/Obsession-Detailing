const path = require('path');
const webpack = require('webpack');

/**
 *
 * @param env
 * @param argv
 * @returns {{entry: string, output: {filename: string}, module: {rules: {test: RegExp, exclude: RegExp, use: {loader: string, options: {plugins: string[], presets: *[]}}}[]}, externals: {"@wordpress/blocks": string[]}}[]}
 */

module.exports = ( env, argv ) => {

    let isDevelopment = () => {
        return argv.mode === 'development';
    };

    return [
        {
            entry: {
                scripts: ['./src/js/scripts.js']
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].min.js'
            },
            devtool: isDevelopment() ? 'cheap-module-eval-source-map'
                : 'source-map',
            module: {
                rules: [
                    {   
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                            }
                        ],
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    url: false
                                }
                            },
                            'postcss-loader',
                            'sass-loader'
                        ]
                    }
                ]  // END: rules
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery"
                })
            ]
        }
    ]// END return - slimmed
};