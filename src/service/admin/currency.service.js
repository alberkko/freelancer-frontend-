import ApiService from "../api.service";

const CurrencyService = {

    async addCurrency(currencyModel) {
        const requestData = {
            method: 'POST',
            url: "/currency/add",
            data: {
                ...currencyModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async editCurrency(currencyModel) {
        const requestData = {
            method: 'POST',
            url: "/currency/edit",
            data: {
                ...currencyModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async removeCurrency(currencyModel) {
        const requestData = {
            method: 'POST',
            url: "/currency/remove",
            data: {
                ...currencyModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async allCurrency() {
        const requestData = {
            method: 'GET',
            url: "/currency/all"
        }
        
        return await ApiService.customRequest(requestData);
    },

}

export default CurrencyService;