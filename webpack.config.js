module.exports = {
	context: __dirname + "/src", // Katalog w którym trzymamy źródła aplikacji
    entry: "./main", // Plik od którego webpack ma zacząć swój proces
    output: { // Plik wynikowy
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
	devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 4200
    },
	module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};	