import Character from "./Character.js";

export default class Project {
	constructor({
		settings = {},
		alphabet = {},
	} = {}) {
		this.settings = {
			id: settings.id || genProjectID(),
			languageName: settings.languageName || 'Language Name',
			author: settings.author || '',
			hasCases: true,
			placeholderGlyphHeight: settings.placeholderGlyphHeight || 10,
			spaceWidth: 4,
		};

		this.alphabet = {};
		for(let id in alphabet) {
			if(alphabet.hasOwnProperty(id)) {
				this.alphabet[id] = new Character(alphabet[id]);
			}
		}	
	}

	getCharacter(charID) {
		if(this.alphabet[charID]) {
			return this.alphabet[charID];
		}

		// console.warn(`Could not find letter with id: ${charID}`);
		return false;
	}
}

export const settingsDescriptions = {
	languageName: 'The name of your constructed language.',
	author: 'Name of the person who created this language',
	hasCases: 'Does this language have Upper and Lower cases.<br>Used to enable the Case and Case Variant property of letters.',
	placeholderGlyphHeight: 'Height of all the placeholder glyphs in your alphabet',
	spaceWidth: 'Width of a space character between placeholder glyphs',
};

function genProjectID() {
	var j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	var re = 'c_';

	for(var i=0; i<10; i++){
		re += j.charAt(Math.floor(Math.round(Math.random()*j.length)));
	}

	return re;
}

export const sampleProject = {
	settings : {
		id: 'c_sampleProject',
		languageName: 'Dadarejode',
		author: 'Matt LaG',
	},

	alphabet : {
		letter01: {id: 'letter01', name: 'Capital A', rank: 1, romanCharacter: 'A', caseValue: 'upper', type: 'vowel', placeholderGlyph: {
			data: '100000110000011000001100000110000011000011000011111111111110',
			width: 6, height: 10,
		}},
		letter02: {id: 'letter05', name: 'Capital E', rank: 2, romanCharacter: 'E', caseValue: 'upper', type: 'vowel'},
		letter03: {id: 'letter09', name: 'Capital I', rank: 3, romanCharacter: 'I', caseValue: 'upper', type: 'vowel', placeholderGlyph: {
			data: '100000110000011000001100000110000011000011000011111111111110',
			width: 6, height: 10,
		}},
		letter04: {id: 'letter15', name: 'Capital O', rank: 4, romanCharacter: 'O', caseValue: 'upper', type: 'vowel'},
		letter05: {id: 'letter21', name: 'Capital U', rank: 5, romanCharacter: 'U', caseValue: 'upper', type: 'vowel'},
	}
};