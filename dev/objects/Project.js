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
			placeholderGlyphHeight: settings.placeholderGlyphHeight || 12,
			defaultPlaceholderGlyphWidth: settings.defaultPlaceholderGlyphWidth || 8,
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
	defaultPlaceholderGlyphWidth: 'Default width of newly-created placeholder glyphs',
	spaceWidth: 'Width of a space character between placeholder glyphs',
};

export const settingsNames = {
	languageName: 'Language name',
	author: 'Author',
	hasCases: 'Has cases',
	placeholderGlyphHeight: 'Placeholder Glyph height',
	defaultPlaceholderGlyphWidth: 'Default Placeholder Glyph width',
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

export const sampleProject = {"settings":{"id":"c_sampleProject","languageName":"Dadarejode","author":"Matt LaG","hasCases":true,"placeholderGlyphHeight":"12","defaultPlaceholderGlyphWidth":8,"spaceWidth":4},"alphabet":{"char01":{"id":"char01","name":"Capital U","placeholderGlyph":{"width":7,"zeroPad":66,"pixelData":"4yoh"},"rank":"1","romanized":"U","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char02":{"id":"char02","name":"Capital O","placeholderGlyph":{"width":7,"zeroPad":66,"pixelData":"5b80"},"rank":"2","romanized":"O","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char03":{"id":"char03","name":"Capital A","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"5pcg"},"rank":"3","romanized":"A","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char04":{"id":"char04","name":"Capital E","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"5nv3"},"rank":"4","romanized":"E","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char05":{"id":"char05","name":"Capital I","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"60lq"},"rank":"5","romanized":"I","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char06":{"id":"char06","name":"Capital H","placeholderGlyph":{"width":7,"zeroPad":6,"pixelData":"ozxxwxz3prghbeo"},"rank":"6","romanized":"H","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""}}};

// {"settings":{"id":"c_sampleProject","languageName":"Dadarejode","author":"Matt LaG","hasCases":true,"placeholderGlyphHeight":"12","defaultPlaceholderGlyphWidth":8,"spaceWidth":4},"alphabet":{"char01":{"id":"char01","name":"Capital U","placeholderGlyph":{"data":"000000000000000000000000000000000000000000000000000000000000000000111000100010010001","width":7},"rank":"1","romanized":"U","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char02":{"id":"char02","name":"Capital O","placeholderGlyph":{"data":"000000000000000000000000000000000000000000000000000000000000000000111100100000010000","width":7},"rank":"2","romanized":"O","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char03":{"id":"char03","name":"Capital A","placeholderGlyph":{"data":"000000000000000000000000000000000000000000000000000000000000000001000000111110010000","width":7},"rank":"3","romanized":"A","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char04":{"id":"char04","name":"Capital E","placeholderGlyph":{"data":"000000000000000000000000000000000000000000000000000000000000000001000000100000001111","width":7},"rank":"4","romanized":"E","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char05":{"id":"char05","name":"Capital I","placeholderGlyph":{"data":"000000000000000000000000000000000000000000000000000000000000000001000100100010001110","width":7},"rank":"5","romanized":"I","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""},"char06":{"id":"char06","name":"Capital H","placeholderGlyph":{"data":"000000100000100000100000000000000000000000000000000000000000000001000000111110010000","width":7},"rank":"6","romanized":"H","type":"vowel","ipaSymbols":"","caseValue":"upper","caseVariant":""}}};
