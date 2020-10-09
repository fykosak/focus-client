export interface UserStorageState {
    isLoggedIn: boolean
}

export const userStorage = (state: UserStorageState = {isLoggedIn: false}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
