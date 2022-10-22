import React from "react";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
    return (
        <div className="relative h-[150px] sm:h-[250px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
            <Image
                src={"/assets/images/banner-v5.jpg"}
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white cursor-default">
                    Not sure where to go? Perfect.
                </p>
                <button className="hidden md:inline text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    );
};

export default Banner;
