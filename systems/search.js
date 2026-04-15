export function search(games, q) {
  return games.filter(g => g.name.includes(q));
}
