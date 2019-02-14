import PlaceholderGlyph from "./PlaceholderGlyph.js";

/**
 * Represents a single letter in the Conlang Alphabet
 */
export default class Character {
	/**
	 * Initialize a Character
	 * @param {string} id - Unique identifier for this letter
	 * @param {string} name - Name of this letter
	 * @param {PlaceholderGlyph} placeholderGlyph - lowfi representation of this letter
	 * @param {number} rank - alphabetical order for this letter
	 * @param {string} romanCharacter - The roman character or characters to use
	 *								  when displaying this letter
	 * @param {array} ipaCharacters - Collection of IPA characters that this letter
	 *								  could be pronounced as
	 * @param {string} type - vowel, consonant, letter, numeral, punctuation, accent, symbol, other
	 * @param {string} caseValue - upper, lower, na
	 * @param {string} caseVariant - Character ID for the capital or lowercase variant of this letter
	 */
	constructor({
		id = false,
		name = 'Character Name',
		placeholderGlyph = false,
		rank = 0,
		romanCharacter = '',
		type = 'other',
		ipaCharacters = [],
		caseValue = 'na',
		caseVariant = '',
	} = {}) {
		this.id = id;
		this.name = name;
		this.placeholderGlyph = placeholderGlyph? new PlaceholderGlyph(placeholderGlyph) : false;
		this.rank = rank;
		this.romanCharacter = romanCharacter;
		this.type = type;
		this.ipaCharacters = ipaCharacters;
		this.caseValue = caseValue;
		this.caseVariant = caseVariant;
	}
}

export const letterDescriptions = {
	id: 'Unique ID for this letter',
	name: 'Character Name',
	rank: 'Sort order for alphabetization',
	romanCharacter: 'Translate this letter to Basic Latin letter(s)',
	type: 'Type of character this is',
	ipaCharacters: 'List of IPA points',
	caseValue: 'Whether this letter is uppercase or lowercase (or neither)',
	caseVariant: 'ID of the uppercase or lowercase variant of this letter',
	placeholderGlyph: 'A very simple representation of this glyph in your conlang.',
};
