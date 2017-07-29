import { counterReducer } from "./counter.reducer";
import { queueReducer } from "./queue.reducer";

export interface AppState {
    counter: number,
    queue: number[]
};

export const reducers = {
    counter: counterReducer,
    queue: queueReducer
};
