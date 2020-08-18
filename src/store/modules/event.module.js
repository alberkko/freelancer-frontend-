const state = {
    alertKey: 1,
    showMessageEvent: true,
    messageLabelEvent: "",
    message: "",
    isPersistent: true,
    labelColor: "#ff3333",
    messageColor: "#cddc39",

    showOverlay: false
}

const getters = {
    getShowMessageEvent: state => state.showMessageEvent,
    getMessageLabelEvent: state => state.messageLabelEvent,
    getMessage: state => state.message,
    getIsPersistent: state => state.isPersistent,
    getLabelColor: state => state.labelColor,
    getMessageColor: state => state.messageColor,
    getShowOverLay: state => state.showOverlay
}

const actions = {
    showTopEvent({
        commit
    }, {
        sheetEvent
    }) {
        commit('showTopEvent', sheetEvent);
    },

    showOverLay({
        commit
    }) {
        commit('showOverLay');
    },
    dismissOverLay({
        commit
    }) {
        commit('dismissOverLay');
    },
    dismissBottomSheetEvent({
        commit
    }) {
        commit('dismissBottomSheetEvent')
    }
}

const mutations = {
    showTopEvent(state, sheetEvent) {
        state.showMessageEvent = sheetEvent.showMessageEvent;
        state.messageLabelEvent = sheetEvent.messageLabelEvent;
        state.message = sheetEvent.message;
        state.isPersistent = sheetEvent.isPersistent;
        state.labelColor = sheetEvent.labelColor;
        state.messageColor = sheetEvent.messageColor;

        if (!sheetEvent.isPersistent) {
            dismissBottomSheetAction()
        }
        state.alertKey++
    },

    dismissBottomSheetEvent(state) {
        state.messageLabelEvent = "";
        state.message = "";
        state.isPersistent = false;
        state.showMessageEvent = false;
    },
    showOverLay(state) {
        state.showOverlay = true;

    },
    dismissOverLay(state) {
        state.showOverlay = false;
    }
}

function dismissBottomSheetAction() {
    setTimeout(() => {
        state.showMessageEvent = false
        state.isPersistent = false;
    }, 2000);
}

export const event = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}