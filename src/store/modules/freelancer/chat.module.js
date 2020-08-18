import ChatService from "../../../service/freelancer/chat.service"

const actions = {
    async moduleAddMessage({
        commit
    }, {
        chatModel
    }) {
        commit('');
        return await ChatService.addMessage(chatModel)
    },

    async moduleAllUserThatIChated() {
        return await ChatService.allUserThatIChated()
    },

    async moduleAllMessagesWithUser({
        commit
    }, {
        pageUserMessages
    }) {
        commit('')
        return await ChatService.allMessagesWithUser(pageUserMessages)
    },

    async moduleSetMessageAsReaded({
        commit
    }, {
        mesasageId
    }) {
        commit('');
        return await ChatService.setMessageAsReaded(mesasageId)
    }
}

export const chat = {
    namespaced: true,
    actions
}