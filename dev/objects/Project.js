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
		console.log(this.alphabet);
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

export const settingsNames = {
	languageName: 'Language name',
	author: 'Author',
	hasCases: 'Has cases',
	placeholderGlyphHeight: 'Placeholder Glyph height',
	spaceWidth: 'Space width',
};

function genProjectID() {
	var j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	var re = 'c_';

	for(var i=0; i<10; i++){
		re += j.charAt(Math.floor(Math.round(Math.random()*j.length)));
	}

	return re;
}

export const sampleProject = {"settings":{"id":"c_sampleProject","languageName":"Dadarejode","author":"Matt LaG","hasCases":true,"placeholderGlyphHeight":10,"spaceWidth":4},"alphabet":{"char01":{"id":"char01","name":"Capital U","placeholderGlyph":{"data":"11111111111100000000000000000000000000000001111000000000000","width":6},"rank":"1","romanized":"U","type":"vowel","ipaSymbols":[],"caseValue":"upper","caseVariant":""},"char02":{"id":"char02","name":"Capital O","placeholderGlyph":{"data":"11111111111111001111001100000000000000000001111000000000000","width":6},"rank":"2","romanized":"O","type":"vowel","ipaSymbols":[],"caseValue":"upper","caseVariant":""},"char03":{"id":"char03","name":"Capital A","placeholderGlyph":{"data":"001100011110110011100001000000000000000000001100000000000000","width":6},"rank":"3","romanized":"A","type":"vowel","ipaSymbols":[],"caseValue":"upper","caseVariant":""},"char04":{"id":"char04","name":"Capital E","placeholderGlyph":{"data":"01111101111101100001100001100000000000000001111000000000000","width":6},"rank":"4","romanized":"E","type":"vowel","ipaSymbols":[],"caseValue":"upper","caseVariant":""},"char05":{"id":"char05","name":"Capital I","placeholderGlyph":{"data":"001100001100001100001100000000000000000000011110000000000000","width":6},"rank":"5","romanized":"I","type":"vowel","ipaSymbols":[],"caseValue":"upper","caseVariant":""}}};