import ApiService from "../api.service";

const ChatService = {

    async addMessage(chatModel) {
        const requestData = {
            method: 'POST',
            url: "/message/to/user",
            data: {
                ...chatModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async allUserThatIChated() {
        const requestData = {
            method: 'GET',
            url: "/messages",
        }

        return await ApiService.customRequest(requestData);
    },

    async allMessagesWithUser(pageUserMessages) {
        const requestData = {
            method: 'POST',
            url: "/messages/withUser",
            data: {
                ...pageUserMessages
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async setMessageAsReaded(mesasageId) {
        const requestData = {
            method: 'GET',
            url: "/set-message-read/" + mesasageId
        }

        return await ApiService.customRequest(requestData);
    },

}

export default ChatService;