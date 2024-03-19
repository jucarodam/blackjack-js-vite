/**
 * Esta funcion crea la carta como elemento HTML
 * @param {String} carta
 * @return {HTMLImageElement} imagen de la carta
 */

export const crearCartaHTML = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
