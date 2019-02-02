/**
 * Represents a single letter in the Conlang Alphabet
 */
export default class Letter {
	/**
	 * Initialize a Letter
	 * @param {string} name - Name of this letter
	 * @param {string} id - Unique identifyer for this letter
	 * @param {number} rank - alphabetical order for this letter
	 * @param {string} romanCharacter - The roman character or characters to use
	 *								  when displaying this letter
	 * @param {array} ipaCharacters - Collenction of IPA characters that this letter
	 *								  could be pronounced as
	 * @param {string} caseVariant - Letter ID for the capital or lowercase variant of this letter
	 * @param {string} fontCharacter - A single Unicode character to use for this letter
	 *								  if this Conlang is being displayed using a custom font
	 */
	constructor({
		name = 'Letter Name',
		rank = 0,
		romanCharacter = '',
		ipaCharacters = [],
		caseVariant = false,
		fontCharacter = ''
	} = {}) {
		this.name = name;
		this.rank = rank;
		this.romanCharacter = romanCharacter;
		this.ipaCharacters = ipaCharacters;
		this.caseVariant = caseVariant;
		this.fontCharacter = fontCharacter;
	}
}