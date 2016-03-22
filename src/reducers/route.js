'use strict';
export default function counter(state = /, action) {
	switch (action.type) {
		case 'CHANGE_ROUTE':
			return action.path;
		default:
			return state;
	}
}
