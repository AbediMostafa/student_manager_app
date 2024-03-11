import axios, {AxiosResponse} from "axios";
import Swal from 'sweetalert2'
import {dialogSwal, modalSwal} from "../helpers.ts";

class ApiService {
    public static baseUrl = 'http://127.0.0.1:8000/api';
    public static axiosInstance = <any>''

    public static init() {

        ApiService.axiosInstance = axios.create({
            baseURL: ApiService.baseUrl,
        });

        ApiService.axiosInstance.interceptors.response.use((response: AxiosResponse) => {

                if (response.data.hasOwnProperty('withResponse'))
                    response.data.status ?
                        dialogSwal("success", "Success", response.data.msg) :
                        dialogSwal("error", "Error", response.data.msg);

                return response;

            }, (error: any) => ApiService.check422Status(error)
        );
    }

    /**
     * Laravel validation error
     * @param error
     */
    public static check422Status(error: any) {

        //status code
        const status = error.response?.status;

        if (status === 422) {

            //Flatten laravel validation errors
            const msg = Object.values(error.response.data.errors).flat().join('<br>');

            modalSwal('error', 'Error', msg);
        }
    }

    /**
     * set the POST HTTP request
     * @param resource
     * @param params
     */
    public static post(resource: any, params: {}) {
        return ApiService.axiosInstance.post(resource, params)
    }

    /**
     * set the DELETE HTTP request
     * @param resource: string
     * @param params : object
     */
    public static delete(resource: any) {
        return ApiService.axiosInstance.delete(resource)
    }
}

export default ApiService