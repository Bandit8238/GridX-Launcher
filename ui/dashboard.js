import { createTile } from "../../components/Tile.js";

export function initDashboard(games) {
  const app = document.getElementById("app");

  games.forEach(game => {
    const tile = createTile(game);
    app.appendChild(tile);
  });
}
