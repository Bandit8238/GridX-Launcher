import { loadGames } from "../systems/games.js";
import { initDashboard } from "../ui/dashboard.js";

async function init() {
  const games = await loadGames();
  initDashboard(games);
}

init();
