import Image from "next/image";
import React from "react";
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src={"/assets/logos/airbnb-logo.png"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    className="border-none flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 order-transparent focus:border-transparent focus:ring-0"
                    type="text"
                    placeholder="Start your search"
                />
                <MagnifyingGlassIcon className="hidden md:inline-flex h-8 p-2 cursor-pointer bg-red-400 text-white rounded-full md:mx-2" />
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500 ">
                <p className="hidden md:inline cursor-pointer p-2 rounded-full hover:bg-gray-100 hover:shadow-sm">
                    Become a host
                </p>
                <GlobeAltIcon className="h-6 cursor-pointer rounded-full hover:bg-gray-100 hover:shadow-sm" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:scale-110 transition:transform duration-200 ease-out">
                    <Bars3Icon className="h-6 " />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    );
};

export default Header;
