export function save(game, data) {
  localStorage.setItem(game, JSON.stringify(data));
}
