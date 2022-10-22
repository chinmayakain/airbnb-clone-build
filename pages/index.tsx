import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import data from "../constants/exploreNearby";

import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

interface Props {
    exploreData: any;
}

const Home: NextPage = (props) => {
    console.log("--props", data);
    return (
        <div className="">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-4">
                        {data?.map((item) => (
                            <SmallCard
                                key={item.img}
                                img={item?.img}
                                location={item?.location}
                                distance={item?.distance}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>
                </section>
            </main>
            {/* {MediumCards} */}
            {/* {LargeCards} */}
        </div>
    );
};

export async function getStaticProps() {
    // const exploreData = await fetch("").then((res) => res.json);

    return {
        props: {
            // exploreData,
        },
    };
}

export default Home;
