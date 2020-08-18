import ApiService from "../api.service";

const ChatService = {

    async addSkill(skillModel) {
        const requestData = {
            method: 'POST',
            url: "/skill/add",
            data: {
                ...skillModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async editSkill(skillModel) {
        const requestData = {
            method: 'POST',
            url: "/skill/edit",
            data: {
                ...skillModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async removeSkill(skillModel) {
        const requestData = {
            method: 'POST',
            url: "/skill/remove",
            data: {
                ...skillModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async allSkills() {
        const requestData = {
            method: 'GET',
            url: "/skill/all"
        }
        
        return await ApiService.customRequest(requestData);
    },

}

export default ChatService;