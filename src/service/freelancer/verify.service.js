import ApiService from "../api.service";

const VerifyService = {

    async resetPassword(resetModel, token) {
        const requestData = {
            method: 'POST',
            url: "/reset/password/"+token,
            data: {
                ...resetModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async askForResetPassword() {
        const requestData = {
            method: 'GET',
            url: "/ask-reset/password",
        }

        return await ApiService.customRequest(requestData);
    },

    async verifyEmailWithToken(token) {
        const requestData = {
            method: 'GET',
            url: "/verify/email/"+token,
            
        }

        return await ApiService.customRequest(requestData);
    },

}

export default VerifyService;