import axios from 'axios'
import {
    TokenProvider
} from '../provider/storage/token.storage';
import store from '../store';
import AuthenticationService from './auth.service';
import router from '../router';

const ApiService = {
    _401interceptor: null,

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        // ToDo let this for athentication
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenProvider.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    customRequest(data) {
        // todo for some reason the header is not set
        this.setHeader();
        try {

            return axios(data)
        } catch (error) {
            if (error.request.status === 403) {
                redirectToLoginPage()
            }
            throw error
        }
    },

    mount401Interceptor() {
        this._401interceptor = axios.interceptors.response.use(
            (response) => {
                return response
            },
            async (error) => {
                if (error.request.status == 401) {
                    try {
                        await store.dispatch('auth/refreshToken')
                        return this.customRequest({
                            method: error.config.method,
                            url: error.config.url,
                            data: error.config.data
                        })
                    } catch (e) {
                        throw error
                    }
                }
                throw error
            }
        )
    },

    unmount401Interceptor() {
        axios.interceptors.response.eject(this._401interceptor)
    }
}

function redirectToLoginPage() {
    router.push("/login").catch(() => {});
    AuthenticationService.logout()
}


export default ApiService;