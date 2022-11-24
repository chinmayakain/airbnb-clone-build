import Image from "next/image";
import React from "react";

type Props = {
    img: string;
    title: string;
};

const ExploreCard = ({ img, title }: Props) => {
   
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out m-4">
            <div className="relative h-80 w-80 flow-root m-auto">
                <Image
                    className="rounded-xl"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h3 className="text-2xl mt-3 ml-10">{title}</h3>
        </div>
    );
};

export default ExploreCard;
