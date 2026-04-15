let index = 0;

export function initGrid(tiles) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") index++;
    if (e.key === "ArrowLeft") index--;

    tiles[index]?.classList.add("focused");
  });
}
