import React from "react";
import { ExploreCard } from "../../components";

interface Props {
    images: [];
}

const Location = ({ images }: Props) => {
    console.log("--props", images);
    return (
        <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
            {images.map(({ id, src, photographer }:any) => (
                <ExploreCard key={id} img={src.original} title={photographer} />
            ))}
        </div>
        </div>
    );
};

export async function getServerSideProps() {
    const headers: any = {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
    };
    const response = await fetch(`https://api.pexels.com/v1/curated`, {
        method: "GET",
        headers,
    });

    const { photos: images } = await response.json();

    return {
        props: {
            images,
        },
    };
}

export default Location;
