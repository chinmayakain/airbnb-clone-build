import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Destination = (props: Props) => {
    const router = useRouter();
    const { img, location, distance }:any = router.query;
    return (
        <div>
            <h1 className="text-3xl font-semibold mt-5 mb-6 pl-5">{location}</h1>
            <p className="text-sm sm:text-lg text-gray-600 cursor-default m-8">Distance : {distance}</p>
            <div>
                <div className="hover:shadow-2xl relative h-32 w-44 md:h-52 md:w-80 flex-root m-12  hover:bg-gray-100 hover:scale-105 transition:transform duration-200 ease-out">
                <Image className="rounded-2xl cursor-pointer " src={img} layout="fill" objectFit="cover" />
                </div>
                <p className="text-sm sm:text-lg text-gray-600 cursor-default m-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima, eligendi eaque unde atque possimus laboriosam quos
                    iure quam aspernatur explicabo, consequatur quod nemo
                    voluptatibus nulla, ipsam quibusdam excepturi aperiam nobis!
                </p>
            </div>
        </div>
    );
};

export default Destination;
