import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

import { Footer, Header } from "../components";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Map";

interface Props {
    searchResults: any;
    [searchResults: string]: {
        img: string;
        location: string;
        title: string;
        description: string;
        star: number;
        price: string;
        total: any;
    };
}

const search = (searchResults: Props) => {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;
    const formattedStartDate = moment(startDate).format("MMM Do YY");
    const formattedEndDate = moment(endDate).format("MMM Do YY");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className="">
            <Header
                placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
            />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        500+ stays {range} for {numberOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms an Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.searchResults.map((item: any) => (
                            <InfoCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Maps locations={searchResults.searchResults} />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
        (response) => response.json()
    );

    return {
        props: {
            searchResults,
        },
    };
}
