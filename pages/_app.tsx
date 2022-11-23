import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import * as ga from '../lib/ga'

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "mapbox-gl/dist/mapbox-gl.css";

import "../styles/globals.css";
import { useEffect } from "react";

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
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url:any) => {
            ga.pageview(url)
          }
          //When the component is mounted, subscribe to router changes
          //and log those page views
          router.events.on('routeChangeComplete', handleRouteChange)
      
          // If the component is unmounted, unsubscribe
          // from the event with the `off` method
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
          }
    }, [router.events])
    
    return <Component {...pageProps} />;
}

export default MyApp;
