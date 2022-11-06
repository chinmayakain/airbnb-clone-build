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
        domains: [
            "images.pexels.com",
            "www.jetsetter.com",
            "www.jsonkeeper.com",
            "links.papareact.com",
        ],
    },
    publicRuntimeConfig: {
        mapboxApiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
        mapStyles: "mapbox://styles/chinmaya-naik/cla54i9fd000614mdrjtwutio",
    },
});
