import BaseService from "./base.service";
import {AddressModel} from "../models/address.model";

export default class AddressService extends BaseService {
    constructor() {
        //TODO: refactoring
        const baseURL: string = "https://geolocator-app.onrender.com";
        super(baseURL);
    }
    async getGeoLocation(data: any) : Promise<AddressModel> {
        try {
            const endpoint = "/addresses/search";
            const response = await this.create(endpoint, data);
            const addressData = response.Data;
            console.log(addressData)
            // Assuming the response is a single AddressModel object
            const address: AddressModel = {
                address: addressData.address,
                latitude: addressData.latitude,
                longitude: addressData.longitude
            };

            return address;
        } catch (error) {
            throw error;
        }
    }
}