import { useRouter } from "next/router";
import React from "react";

type Props = {};

const becomeAHost = (props: Props) => {
    const router = useRouter();

    const handleHome = () => {
        router.push("/");
    };
    return (
        <div className="text-center text-2xl font-semibold m-12">
            <p>Page Under Construction! 🚧 </p>
            <button
                className="button mt-12 bg-red-500 text-white"
                onClick={() => handleHome()}
            >
                Return Home
            </button>
        </div>
    );
};

export default becomeAHost;
