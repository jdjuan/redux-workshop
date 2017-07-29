import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT10 = 'INCREMENT10';
export const DECREMENT10 = 'DECREMENT10';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action): number {
	switch (action.type) {
		case INCREMENT:
			return state + 1;

		case DECREMENT:
			return state - 1;

		case INCREMENT10:
			return state + 10;

		case DECREMENT10:
			return state - 10;

		case RESET:
			return 0;

		default:
			return state;
	}
}