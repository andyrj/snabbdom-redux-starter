import {t} from 'redux-tcomb';

export const CHANGE_PATH = t.struct({path: t.String}, 'CHANGE_PATH');

export const ADD_ROUTE = t.struct({path: t.String, name: t.String, isMenuItem: t.Boolean}, 'ADD_ROUTE');

export const DEL_ROUTE = t.struct({path: t.String}, 'DEL_ROUTE');
