import React, { useState } from 'react';
import AddressFormComponent from "../components/addressForm.component";
import MapComponent from "../components/map.component";
import AddressService from "../services/address.service";
import {AddressModel} from "../models/address.model";
import {AddressSearchModel} from "../models/addressSearch.model";

const HomeView: React.FC = () => {
    const [addressData, setAddressData] = useState<AddressModel | null>(null);
    const [error, setError] = useState<string | null>(null);

    const addressService = new AddressService();
    const handleApiCall = async (data: AddressSearchModel) => {
        try {
            const response = await addressService.getGeoLocation(data);
            setAddressData(response);
        } catch (error) {
            setError('Error fetching data');
        }
    };

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <AddressFormComponent handleFetchApiCall={handleApiCall}/>
            </div>
            <div style={{flex: 1}}>
                {addressData !== null || error !== null ? (
                    <MapComponent data={addressData} error={error} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default HomeView;
