import type { AppProps } from "next/app";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "mapbox-gl/dist/mapbox-gl.css";

import "../styles/globals.css";

/* progress indicator **/
const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
});

/* progress bar handler **/
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
