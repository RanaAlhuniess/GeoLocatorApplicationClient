import Response from "../models/response";
import axios from "axios";

export default class BaseService {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL || "https://geolocator-app.onrender.com";
    }

    public async create<T>(url: string, obj: T): Promise<Response> {

        try {
            const response = await axios.post(this.baseURL + url, obj);
            const result = response.data;
            if (!result) {
                throw new Error("Error fetching map data");
            }
            return new Response(true, result, "Success", "");
        } catch (error: any) {
            const errorMessage = error.message || error.toString();
            return new Response(false, null, "Error", errorMessage);
        }
    }
}