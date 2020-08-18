const LANG_KEY = 'language'

const LanguageProvider = {
    getLanguage() {
        return localStorage.getItem(LANG_KEY)
    },

    setLanguage(language) {
        localStorage.setItem(LANG_KEY, language)
    }
}

export {
    LanguageProvider
}