import VerifyService from "../../../service/freelancer/verify.service";


const actions = {
    async moduleResetPassword({
        commit
    }, {
        newPassword,
        token
    }) {
        commit('');
        return await VerifyService.resetPassword(newPassword, token)
    },

    async moduleAskForResetPassword() {
        return await VerifyService.askForResetPassword()
    },

    async moduleVerifyEmailWithToken({
        commit
    }, {
        token
    }) {
        commit('');
        return await VerifyService.verifyEmailWithToken(token)
    }
}

export const verify = {
    namespaced: true,
    actions
}