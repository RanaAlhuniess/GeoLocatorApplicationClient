import React, { useState } from 'react';
import AddressFormComponent from "../components/addressForm.component";
import MapComponent from "../components/map.component";
import AddressService from "../services/address.service";

const HomeView: React.FC = () => {
    const [apiData, setApiData] = useState<any>(null);

    const addressService = new AddressService();
    const handleApiCall = async (data: any) => {
        try {
            const response = await addressService.getGeoLocation(data);
            setApiData(response); // Set the API response in state
        } catch (error) {
            // Handle errors from the API call
        }
    };

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <AddressFormComponent/>
            </div>
            <div style={{flex: 1}}>
                <MapComponent />
            </div>
        </div>
    );
};

export default HomeView;
