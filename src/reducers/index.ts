import { combineReducers } from 'redux';
import { userStorage, UserStorageState } from './userStoreage';
import { tasksStorage, TasksStorage } from '@app/reducers/tasksStorage';

export const app = combineReducers({
    userStorage,
    tasksStorage,
});

export interface Store {
    userStorage: UserStorageState;
    tasksStorage: TasksStorage;
}
