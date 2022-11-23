import type { NextPage } from "next";
import Head from "next/head";

import data from "../constants/exploreNearby";
import liveData from "../constants/liveAnywhere";
import {
    Banner,
    Header,
    SmallCard,
    MediumCard,
    LargeCard,
    Footer,
} from "../components";

interface Props {
    exploreData: any;
}

const Home: NextPage = (props) => {
    return (
        <div className="font-family:airbnb-cereal">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="public/fonts/AirbnbCereal_W_Bd.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <Header placeholder="" />
            <Banner />
            <main className="font-family:AirbnbCereal max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-4">
                        {data?.map(({ img, location, distance }) => (
                            <SmallCard
                                key={img}
                                img={img}
                                location={location}
                                distance={distance}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-7">
                        Live Anywhere
                    </h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
                        {liveData?.map(({ img, title }) => (
                            <MediumCard key={img} img={img} title={title} />
                        ))}
                    </div>
                </section>
                <section>
                    <LargeCard
                        img="https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-968240286-1376x1032.jpg"
                        title="The Memorable Visits"
                        description="Wishlists curated by Airbnb."
                        buttonText="Get Inspired"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export async function getStaticProps() {
    // const exploreData = await fetch("").then((res) => res.json);
    // const liveAnywhereData = await fetch("").then((res) => res.json);

    return {
        props: {
            // exploreData,
        },
    };
}

export default Home;
