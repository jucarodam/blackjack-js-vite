/**
 * Esta funcion retorna una carta del deck
 * @param {Array<string>} deck baraja de cartas
 * @return {String} retorna la última carta del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
