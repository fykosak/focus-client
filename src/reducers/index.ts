import { combineReducers } from 'redux';
import { userStorage, UserStorageState } from './userStoreage';

export const app = combineReducers({
    userStorage,
});

export interface Store {
    userStorage: UserStorageState;
}
