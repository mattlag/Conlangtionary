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
		languageName: 'Ligida',
		author: 'Matt LaG',
	},

	alphabet : {
		letter01: {id: 'letter01', name: 'Capital A', rank: 1, romanCharacter: 'A', caseValue: 'upper', type: 'vowel', placeholderGlyph: {
			data: '100000110000011000001100000110000011000011000011111111111110',
			width: 6, height: 10,
		}},
		letter02: {id: 'letter02', name: 'Capital B', rank: 2, romanCharacter: 'B', caseValue: 'upper', type: 'consonant'},
		letter03: {id: 'letter03', name: 'Capital C', rank: 3, romanCharacter: 'C', caseValue: 'upper', type: 'consonant'},
		letter04: {id: 'letter04', name: 'Capital D', rank: 4, romanCharacter: 'D', caseValue: 'upper', type: 'consonant', placeholderGlyph: {
			data: '100000110000011000001100000110000011000011000011111111111110',
			width: 6, height: 10,
		}},
		letter05: {id: 'letter05', name: 'Capital E', rank: 5, romanCharacter: 'E', caseValue: 'upper', type: 'vowel'},
		letter06: {id: 'letter06', name: 'Capital F', rank: 6, romanCharacter: 'F', caseValue: 'upper', type: 'consonant'},
		letter07: {id: 'letter07', name: 'Capital G', rank: 7, romanCharacter: 'G', caseValue: 'upper', type: 'consonant'},
		letter08: {id: 'letter08', name: 'Capital H', rank: 8, romanCharacter: 'H', caseValue: 'upper', type: 'consonant'},
		letter09: {id: 'letter09', name: 'Capital I', rank: 9, romanCharacter: 'I', caseValue: 'upper', type: 'vowel', placeholderGlyph: {
			data: '100000110000011000001100000110000011000011000011111111111110',
			width: 6, height: 10,
		}},
		letter10: {id: 'letter10', name: 'Capital J', rank: 10, romanCharacter: 'J', caseValue: 'upper', type: 'consonant'},
		letter11: {id: 'letter11', name: 'Capital K', rank: 11, romanCharacter: 'K', caseValue: 'upper', type: 'consonant'},
		letter12: {id: 'letter12', name: 'Capital L', rank: 12, romanCharacter: 'L', caseValue: 'upper', type: 'consonant'},
		letter13: {id: 'letter13', name: 'Capital M', rank: 13, romanCharacter: 'M', caseValue: 'upper', type: 'consonant'},
		letter14: {id: 'letter14', name: 'Capital N', rank: 14, romanCharacter: 'N', caseValue: 'upper', type: 'consonant'},
		letter15: {id: 'letter15', name: 'Capital O', rank: 15, romanCharacter: 'O', caseValue: 'upper', type: 'vowel'},
		letter16: {id: 'letter16', name: 'Capital P', rank: 16, romanCharacter: 'P', caseValue: 'upper', type: 'consonant'},
		letter17: {id: 'letter17', name: 'Capital Q', rank: 17, romanCharacter: 'Q', caseValue: 'upper', type: 'consonant'},
		letter18: {id: 'letter18', name: 'Capital R', rank: 18, romanCharacter: 'R', caseValue: 'upper', type: 'consonant'},
		letter19: {id: 'letter19', name: 'Capital S', rank: 19, romanCharacter: 'S', caseValue: 'upper', type: 'consonant'},
		letter20: {id: 'letter20', name: 'Capital T', rank: 20, romanCharacter: 'T', caseValue: 'upper', type: 'consonant'},
		letter21: {id: 'letter21', name: 'Capital U', rank: 21, romanCharacter: 'U', caseValue: 'upper', type: 'vowel'},
		letter22: {id: 'letter22', name: 'Capital V', rank: 22, romanCharacter: 'V', caseValue: 'upper', type: 'consonant'},
		letter23: {id: 'letter23', name: 'Capital W', rank: 23, romanCharacter: 'W', caseValue: 'upper', type: 'consonant'},
		letter24: {id: 'letter24', name: 'Capital X', rank: 24, romanCharacter: 'X', caseValue: 'upper', type: 'consonant'},
		letter25: {id: 'letter25', name: 'Capital Y', rank: 25, romanCharacter: 'Y', caseValue: 'upper', type: 'consonant'},
		letter26: {id: 'letter26', name: 'Capital Z', rank: 26, romanCharacter: 'Z', caseValue: 'upper', type: 'consonant'},
	}
};