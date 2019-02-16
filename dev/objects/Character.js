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
	 * @param {string} romanized - The roman character or characters to use
	 *								  when displaying this letter
	 * @param {array} ipaSymbols - Collection of IPA characters that this letter
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
		romanized = '',
		type = 'other',
		ipaSymbols = [],
		caseValue = 'na',
		caseVariant = '',
	} = {}) {
		this.id = id;
		this.name = name;
		this.placeholderGlyph = placeholderGlyph? new PlaceholderGlyph(placeholderGlyph) : false;
		this.rank = rank;
		this.romanized = romanized;
		this.type = type;
		this.ipaSymbols = ipaSymbols;
		this.caseValue = caseValue;
		this.caseVariant = caseVariant;
	}
}

export const propertyDescriptions = {
	id: 'Unique ID for this letter',
	name: 'Character Name',
	rank: 'Sort order for alphabetization',
	romanized: 'Translate this letter to Basic Latin letter(s)',
	type: 'Type of character this is',
	ipaSymbols: 'List of IPA symbols',
	caseValue: 'Whether this letter is uppercase or lowercase (or neither)',
	caseVariant: 'ID of the uppercase or lowercase variant of this letter',
	placeholderGlyph: 'A very simple representation of this glyph in your conlang',
};

export const propertyNames = {
	id: 'ID',
	name: 'Name',
	rank: 'Rank',
	romanized: 'Romanized',
	type: 'Type',
	ipaSymbols: 'IPA symbols',
	caseValue: 'Case',
	caseVariant: 'Case variant',
	placeholderGlyph: 'Placeholder glyph',
};
