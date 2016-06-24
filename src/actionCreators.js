export function changePath(path) {
  return {type: 'CHANGE_PATH', path};
}

export function addRoute(path, name, isMenuItem) {
  return {type: 'ADD_ROUTE', path, name, isMenuItem};
}

export function delRoute(path) {
  return {type: 'DEL_ROUTE', path};
}
