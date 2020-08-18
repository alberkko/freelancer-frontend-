import {
    TokenProvider
} from "../provider/storage/token.storage";
import ApiService from "./api.service";

const AuthenticationService = {
    async login(userName, password) {
        const requestData = {
            method: 'post',
            url: "/auth/login",
            data: {
                userName: userName,
                password: password
            }
        }

        const response = await ApiService.customRequest(requestData);

        TokenProvider.saveToken(response.data.token);
        ApiService.setHeader();
        ApiService.mount401Interceptor();
        
        return response.data
    },

    async signUpFreeLancer(profile) {
        const requestData = {
            method: 'POST',
            url: "/sign-up/free-lancer",
            data: {
                ...profile
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async refreshToken() {
        const refreshToken = TokenProvider.getRefreshToken()

        const requestData = {
            method: 'POST',
            url: "/auth/refresh-token",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
        }

        const response = await ApiService.customRequest(requestData)

        TokenProvider.saveToken(response.data.token)
        TokenProvider.saveRefreshToken(response.data.token)

        ApiService.setHeader();

        return response.data.token
    },

    logout() {
        TokenProvider.removeToken();
        TokenProvider.removeRefreshToken();

        ApiService.removeHeader();
        ApiService.unmount401Interceptor();
    }
}

export default AuthenticationService;