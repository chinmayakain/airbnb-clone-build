import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {kebabCase} from "lodash"

type Props = {
    img: string;
    title: string;
};

const MediumCard = ({ img, title }: Props) => {
    const router = useRouter()

    const handleLocation = () =>{
        router.push({
            pathname: `/live-anywhere/${kebabCase(title)}`

        })
    }

    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div onClick={() => handleLocation()}className="relative h-80 w-80">
                <Image
                    className="rounded-xl"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    );
};

export default MediumCard;
