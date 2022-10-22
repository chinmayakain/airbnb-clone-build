/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");
module.exports = withFonts({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "url-loader?limit=100000",
                },
                {
                    loader: "file-loader",
                },
            ],
        });
        return config;
    },
    reactStrictMode: true,
    images: {
        domains: ["www.jetsetter.com"],
    },
});
