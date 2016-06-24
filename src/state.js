import {t} from 'redux-tcomb';

const route = t.struct({name: t.String, isMenuItem: t.Boolean}, 'Route');

const state = t.struct({
  path: t.String,
  routes: t.dict(t.String, route),
  authenticated: t.Boolean
}, 'State');

export default state;
