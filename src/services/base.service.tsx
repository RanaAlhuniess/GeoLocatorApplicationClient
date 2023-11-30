import Response from "../models/response";
import axios from "axios";

export default class BaseService {
    private  baseURL: string = "https://geolocator-app.onrender.com";
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(this.baseURL + url + param)
            .then((response: any) => {
                const result = response.data;
                if (result && result.success) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public create<T>(url: string, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url, obj)
            .then(response => {
                const result = response.data;
                if (result && result.success) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
}