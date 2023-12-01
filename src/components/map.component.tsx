import React from 'react';
import {AddressModel} from "../models/address.model";
interface MapProps {
    data: AddressModel | null;
    error: string | null;
}
const MapComponent: React.FC <MapProps> = ({ data, error }) => {
    // Code for your map component goes here
    return (
        <div>
            {/* Your map display */}
            <p>Future Consideration: Map Display Here & set pin ^_^ </p>
            {error ? (
                <div>
                    <p>Error: {error}</p>
                </div>
            ) : (
                <div>
                    {/* Render map using 'data' prop */}
                    <p>Map Display Here</p>
                    {/* Display map data */}
                    {data && (
                        <div>
                            <p>Map Data:</p>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MapComponent;
