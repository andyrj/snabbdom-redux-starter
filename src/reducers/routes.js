'use strict';
import i from 'icepick';

export default function routes(state = {}, action) {
	switch (action.type) {
    case 'ADD_ROUTE':
      return i.assoc(state, action.path, {name: action.name, isMenuItem: action.isMenuItem});
    case 'DEL_ROUTE':
      return i.dissoc(state, action.path);
    default:
			return state;
	}
}
