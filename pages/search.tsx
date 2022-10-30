import { useRouter } from "next/router";
import React from "react";
import { format, formatISO, parseISO } from "date-fns";

import { Footer, Header } from "../components";

type Props = {};

const search = (props: Props) => {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;
    // console.log("--startDate", startDate);
    // const formattedStartDate = format(new Date(`${startDate}`), "dd MMM yy");
    // const formattedEndDate = format(new Date(`${endDate}`), "dd MMM yy");
    // const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className="">
            <Header />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        500+ stays {"range"} for {numberOfGuests} guests
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
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default search;
