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

		console.warn(`Could not find letter with id: ${charID}`);
		conlog(this.alphabet);
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

export const sampleProject = {"settings":{"id":"c_sampleProject","languageName":"Dadarejode","author":"Matt LaG","hasCases":true,"placeholderGlyphHeight":"12","spaceWidth":4},"alphabet":{"char01":{"id":"char01","name":"Capital U","placeholderGlyph":{"data":"111111111111111100011110001111000111100011110000011000001100000110000011000001100000","width":7},"rank":"1","romanCharacter":"U","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""},"char02":{"id":"char02","name":"Capital O","placeholderGlyph":{"data":"111111111111111100000110000011000001100000110000011000001100000110000011000001100000","width":7},"rank":"2","romanCharacter":"O","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""},"char03":{"id":"char03","name":"Capital A","placeholderGlyph":{"data":"110000011100001111000111110011011101100111110001111000011100000110000011000001100000","width":7},"rank":"3","romanCharacter":"A","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""},"char04":{"id":"char04","name":"Capital E","placeholderGlyph":{"data":"110001111000111100011110001111111111111111110000011000001100000110000011000001100000","width":7},"rank":"4","romanCharacter":"E","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""},"char05":{"id":"char05","name":"Capital I","placeholderGlyph":{"data":"110000011000001100000110000011111111111111110000011000001100000110000011000001100000","width":7},"rank":"5","romanCharacter":"I","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""},"char06":{"id":"char06","name":"Capital H","placeholderGlyph":{"data":"110000011000001100000110000011000001100000110000011000001100001110001111111111111110","width":7},"rank":"6","romanCharacter":"H","type":"vowel","ipaCharacters":"","caseValue":"upper","caseVariant":""}}};