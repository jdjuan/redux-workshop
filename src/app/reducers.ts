import { counterReducer } from "./counter.reducer";

export interface AppState {
    counter: number;
};

export const reducers = {
    counter: counterReducer
};
