import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @return {Array<string>} Retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  let deck = [];

  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TipoDeCarta es obligatorio como un arreglo de string");
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
