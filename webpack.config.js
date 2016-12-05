module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/weather/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/weather/WeatherForm.jsx',
            WeatherMessage: 'app/components/weather/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                },
                test: /\.jsx?$/,
                exclude: /(node_module|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};
