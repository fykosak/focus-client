import { Action } from 'redux'

export const ACTION_LOGOUT = '@@loginStorage/logout'
export const actionLogout = (): Action<string> => {
    return {
        type: ACTION_LOGOUT,
    }
}

export const ACTION_LOGIN = '@@loginStorage/login'
export const actionLogin = (): Action<string> => {
    return {
        type: ACTION_LOGIN,
    }
}
