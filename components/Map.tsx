import React, { useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import getConfig from "next/config";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/solid";

const { publicRuntimeConfig } = getConfig();
const { mapboxApiKey, mapStyles } = publicRuntimeConfig;

export interface IMapProps {
    locations: any;
}

interface selectedLocationType {
    lat: number;
    long: number;
}

const Maps = ({ locations }: IMapProps) => {
    const [selectedLocation, setSelectedLocation] =
        useState<selectedLocationType>();

    /* Transforming locations list for getCenter function **/
    const dataPoints = locations.map((location: any) => ({
        latitude: location.lat,
        longitude: location.long,
    }));

    const center: any = getCenter(dataPoints);

    const [viewState, setViewState] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });

    return (
        <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: "100%", height: "100%" }}
            mapStyle={mapStyles}
            mapboxAccessToken={mapboxApiKey}
        >
            {locations.map((location: any) => (
                <div key={location.long}>
                    <Marker
                        longitude={location.long}
                        latitude={location.lat}
                        offset={[-20, -10]}
                    >
                        <p
                            role="img"
                            className="cursor-pointer text-2xl animate-bounce"
                            onClick={() => setSelectedLocation(location)}
                        >
                            🎈
                        </p>
                    </Marker>
                    {selectedLocation?.long === location.long ? (
                        <Popup
                            onClose={() =>
                                setSelectedLocation({ lat: 0, long: -0.5 })
                            }
                            closeOnClick={true}
                            latitude={location.lat}
                            longitude={location.long}
                        >
                            {location.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </Map>
    );
};

export default Maps;
