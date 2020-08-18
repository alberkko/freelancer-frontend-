import {
    LanguageProvider
} from "../../provider/language.storage"

import languageJson from "../../assets/json/language.json";

const state = {
    languageKey: LanguageProvider.getLanguage(),
    languageJson: languageJson
}

const getters = {
    getWordInLanguage: (state) => wordKey => {
        return state.languageJson[state.languageKey][wordKey]
    }
}

const actions = {
    changeLanguageModule({
        commit
    }, {
        langKey
    }) {
        commit("languageChanged", langKey)
        LanguageProvider.setLanguage(langKey)
    }
}

const mutations = {
    languageChanged(state, key) {
        state.languageKey = key;
    },
}


export const lang = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}