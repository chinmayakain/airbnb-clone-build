import * as React from "react";
import { Popover } from "@headlessui/react";

export interface IMapPopupProps {}

const MapPopup = (props: IMapPopupProps) => {
    return (
        <Popover className="relative">
            <Popover.Button>Solutions</Popover.Button>
            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    );
};

export default MapPopup;
