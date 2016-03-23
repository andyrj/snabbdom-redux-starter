'use strict';
export default function path(state = '/', action) {
	switch (action.type) {
		case 'CHANGE_ROUTE':
			return action.path;
		default:
			return state;
	}
}

