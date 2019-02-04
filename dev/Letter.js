/**
 * Represents a single letter in the Conlang Alphabet
 */
export default class Letter {
	/**
	 * Initialize a Letter
	 * @param {string} id - Unique identifier for this letter
	 * @param {string} name - Name of this letter
	 * @param {number} rank - alphabetical order for this letter
	 * @param {string} romanCharacter - The roman character or characters to use
	 *								  when displaying this letter
	 * @param {array} ipaCharacters - Collection of IPA characters that this letter
	 *								  could be pronounced as
	 * @param {string} caseVariant - Letter ID for the capital or lowercase variant of this letter
	 * @param {string} fontCharacter - A single Unicode character to use for this letter
	 *								  if this Conlang is being displayed using a custom font
	 */
	constructor({
		id = false,
		name = 'Letter Name',
		rank = 0,
		romanCharacter = '',
		ipaCharacters = [],
		caseVariant = '',
		fontCharacter = ''
	} = {}) {
		this.id = id;
		this.name = name;
		this.rank = rank;
		this.romanCharacter = romanCharacter;
		this.ipaCharacters = ipaCharacters;
		this.caseVariant = caseVariant;
		this.fontCharacter = fontCharacter;
	}
}

export const letterDescriptions = {
	id: 'Unique ID for this letter',
	name: 'Letter Name',
	rank: 'Sort order for alphabetization',
	romanCharacter: 'Translate this letter to Basic Latin letter(s)',
	ipaCharacters: 'List of IPA points',
	caseVariant: 'ID of the uppercase or lowercase variant of this letter',
	fontCharacter: 'Character where this letter can be found in your custom font',
}