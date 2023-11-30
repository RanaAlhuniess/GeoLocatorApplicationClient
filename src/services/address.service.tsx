import BaseService from "./base.service";

export default class AddressService extends BaseService {
    constructor() {
        const baseURL: string = "https://geolocator-app.onrender.com";
        super(baseURL);
    }
    async getGeoLocation(data: any) {
        try {
            const endpoint = "/addresses/search";
            return await this.create(endpoint, data);
        } catch (error) {
            throw error;
        }
    }
}