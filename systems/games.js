export async function loadGames() {
  const res = await fetch("./data/games.json");
  return res.json();
}
