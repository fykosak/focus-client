import { ACTION_LOGIN, ACTION_LOGOUT } from '@app/actions/userStorage';

export interface UserStorageState {
    isLoggedIn: boolean
}

const logout = (state: UserStorageState): UserStorageState => {
    return {
        ...state,
        isLoggedIn: false,
    }
}

const login = (state: UserStorageState): UserStorageState => {
    return {
        ...state,
        isLoggedIn: true,
    }
}

export const userStorage = (state: UserStorageState = {isLoggedIn: true}, action) => {
    switch (action.type) {
        case ACTION_LOGOUT:
            return logout(state);
        case ACTION_LOGIN:
            return login(state);
        default:
            return state;
    }
}
