export function set(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function get(key) {
  return JSON.parse(localStorage.getItem(key));
}
