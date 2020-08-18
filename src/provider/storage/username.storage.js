const USERNAME_KEY = 'username_token'


const UserNameProvider = {
    getUserName() {
        return localStorage.getItem(USERNAME_KEY)
    },

    saveUserName(userNameToken) {
        localStorage.setItem(USERNAME_KEY, userNameToken)
    },

    removeUserName() {
        localStorage.removeItem(USERNAME_KEY)
    },

}

export {
    UserNameProvider
};