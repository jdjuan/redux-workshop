import { Action } from '@ngrx/store';

export const ADD = 'ADD';

export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: string) { }
}

export function queueReducer(state: string[] = [], action: Add): string[] {
	switch (action.type) {
		case ADD:
			// return state.push;
			return [...state, action.payload];

		default:
			return state;
	}
}