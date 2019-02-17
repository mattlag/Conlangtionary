import Character from './Character.js';
import { editCharacter } from '../dialogs/editCharacter.js';
import { showToast } from '../dialogs/Dialog.js';
import { propertyNames } from '../objects/Character.js';

export default class Project {
	constructor({
		settings = {},
		alphabet = {},
	} = {}) {
		conlog('Project - start');
		this.settings = {
			id: settings.id || genProjectID(),
			languageName: settings.languageName || 'Language Name',
			author: settings.author || '',
			hasCases: true,
			placeholderGlyphHeight: settings.placeholderGlyphHeight || 12,
			defaultPlaceholderGlyphWidth: settings.defaultPlaceholderGlyphWidth || 8,
			spaceWidth: 4,
		};

		this.charIDPrefix = 'char';

		this.alphabet = {};
		for(let id in alphabet) {
			if(alphabet.hasOwnProperty(id)) {
				this.alphabet[id] = new Character(alphabet[id]);
			}
		}

		this.update = {};
		conlog('Project - end');
	}

	toJSON() {
		return {
			settings: this.settings,
			alphabet: this.alphabet,
		};
	}

	getCharacter(charID) {
		if(this.alphabet[charID]) {
			return this.alphabet[charID];
		}

		console.warn(`Could not find letter with id: ${charID}`);
		conlog(this.alphabet);
		return false;
	}

	save() {
		let d = new Date();
		let yr = d.getFullYear();
		let mo = d.getMonth()+1;
		let day = d.getDate();
		let hr = d.getHours();
		let min = (d.getMinutes()<10? '0' : '') + d.getMinutes();
		let sec = (d.getSeconds()<10? '0' : '') + d.getSeconds();
	
		let suffix = (''+yr+'.'+mo+'.'+day+'-'+hr+'.'+min+'.'+sec);
	
		let data = JSON.stringify(this);
	
		saveFile(`${this.settings.languageName} - conlangtionary - ${suffix}.txt`, data);
	}

	editCharacter(charID) {
		return editCharacter(charID);
	}

	updateSetting(prop, value) {
		conlog(`setting ${prop} to ${typeof value} ${value}`);
		this.settings[prop] = value;
		showToast(`Updated ${settingsNames[prop]}`);
	}
	
	character(charID, prop, value) {
		let char = this.getCharacter(charID);
		if(char) char[prop] = value;

		let gridval = document.getElementById('alphabet-grid-'+charID+'-'+prop);
		// conlog(gridval);
		
		if(gridval) {
			gridval.innerHTML = value;
		}

		showToast(`${char.name}<br>updated ${propertyNames[prop]}`);
	}

	caseVariant(charID1, charID2) {
		let char1 = this.getCharacter(charID1);
	}

	letterWidth(charID, increase) {
		let char = this.getCharacter(charID);

		if(increase) char.placeholderGlyph.increaseWidth();
		else char.placeholderGlyph.decreaseWidth();

		updatePlaceholderGrids(charID, char);
	}

	togglePixel(charID, row, col) {
		// conlog(`togglePixel ${charID}, ${row}, ${col}`);
		let char = this.getCharacter(charID);
		char.placeholderGlyph.togglePixelAt(row, col);
		
		updatePlaceholderGrids(charID, char);
	}

	hoverPixel (event, charID, row, col) {
		// conlog(`togglePixel ${charID}, ${row}, ${col}`);
		event = event || window.event;
		let brush;
		
		if(event.shiftKey) brush = 1;
		else if(event.ctrlKey) brush = 0;
		else return;
		
		let char = this.getCharacter(charID);
		char.placeholderGlyph.setPixelAt(row, col, brush);
		
		updatePlaceholderGrids(charID, char);
	}

	getSortedAlphabetArray() {
		let alphabetList = [];
	
		for(let key in this.alphabet) {
			if(this.alphabet.hasOwnProperty(key)) {
				alphabetList.push(this.alphabet[key]);
			}
		}
	
		alphabetList.sort(function (a, b) { return a.rank - b.rank; });
	
		return alphabetList;
	}
}

function updatePlaceholderGrids(charID, char) {
	let gridval = document.getElementById('alphabet-grid-'+charID+'-placeholderGlyph');
	if(gridval) gridval.innerHTML = char.placeholderGlyph.makeDisplayChar();

	let editval = document.getElementById('edit-placeholderGlyph');
	if(editval) editval.innerHTML = char.placeholderGlyph.makeEditGrid(10, 1, charID);
}

export function saveFile(fname, buffer, ftype) {
	ftype = ftype || 'text/plain;charset=utf-8';
	var fblob = new Blob([buffer], {'type':ftype, 'endings':'native'});

	var link = document.createElement('a');
	window.URL = window.URL || window.webkitURL;
	link.href = window.URL.createObjectURL(fblob);
	link.download = fname;

	var event = document.createEvent('MouseEvents');
	event.initEvent('click', true, false);
	link.dispatchEvent(event);

	return;
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

export const sampleProject = {"settings":{"id":"c_sampleProject","languageName":"Dadareshjode","author":"Matt LaG","hasCases":true,"placeholderGlyphHeight":"12","defaultPlaceholderGlyphWidth":8,"spaceWidth":4},"alphabet":{"char01":{"id":"char01","name":"Capital U","placeholderGlyph":{"width":7,"zeroPad":66,"pixelData":"4yoh"},"rank":"1","romanized":"U","type":"vowel","ipaSymbols":"u","caseValue":"upper","caseVariant":""},"char02":{"id":"char02","name":"Capital O","placeholderGlyph":{"width":7,"zeroPad":66,"pixelData":"5b80"},"rank":"2","romanized":"O","type":"vowel","ipaSymbols":"ɔ","caseValue":"upper","caseVariant":""},"char03":{"id":"char03","name":"Capital A","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"5pcg"},"rank":"3","romanized":"A","type":"vowel","ipaSymbols":"a","caseValue":"upper","caseVariant":""},"char04":{"id":"char04","name":"Capital E","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"5nv3"},"rank":"4","romanized":"E","type":"vowel","ipaSymbols":"ɛ","caseValue":"upper","caseVariant":""},"char05":{"id":"char05","name":"Capital I","placeholderGlyph":{"width":7,"zeroPad":65,"pixelData":"60lq"},"rank":"5","romanized":"I","type":"vowel","ipaSymbols":"i","caseValue":"upper","caseVariant":""},"char06":{"id":"char06","name":"Capital H","placeholderGlyph":{"width":7,"zeroPad":6,"pixelData":"ozu3z0hzcqgyt4w"},"rank":"6","romanized":"H","type":"vowel","ipaSymbols":"h","caseValue":"upper","caseVariant":""},"char07":{"id":"char07","name":"Capital B","placeholderGlyph":false,"rank":"8","romanized":"B","type":"consonant","ipaSymbols":"b","caseValue":"upper","caseVariant":""},"char08":{"id":"char08","name":"Capital P","placeholderGlyph":false,"rank":"8","romanized":"P","type":"consonant","ipaSymbols":"p","caseValue":"upper","caseVariant":""},"char09":{"id":"char09","name":"Capital M","placeholderGlyph":false,"rank":"9","romanized":"M","type":"consonant","ipaSymbols":"m","caseValue":"upper","caseVariant":""},"char10":{"id":"char10","name":"Capital V","placeholderGlyph":false,"rank":"10","romanized":"V","type":"consonant","ipaSymbols":"v","caseValue":"upper","caseVariant":""},"char11":{"id":"char11","name":"Capital F","placeholderGlyph":false,"rank":"11","romanized":"F","type":"consonant","ipaSymbols":"f","caseValue":"upper","caseVariant":""},"char12":{"id":"char12","name":"Capital THJ","placeholderGlyph":false,"rank":"12","romanized":"THJ","type":"consonant","ipaSymbols":"ð","caseValue":"upper","caseVariant":""},"char13":{"id":"char13","name":"Capital TH","placeholderGlyph":false,"rank":"13","romanized":"TH","type":"consonant","ipaSymbols":"θ","caseValue":"upper","caseVariant":""},"char14":{"id":"char14","name":"Capital D","placeholderGlyph":false,"rank":"14","romanized":"D","type":"consonant","ipaSymbols":"d","caseValue":"upper","caseVariant":""},"char15":{"id":"char15","name":"Capital T","placeholderGlyph":false,"rank":"15","romanized":"T","type":"consonant","ipaSymbols":"t","caseValue":"upper","caseVariant":""},"char16":{"id":"char16","name":"Capital N","placeholderGlyph":false,"rank":"16","romanized":"N","type":"consonant","ipaSymbols":"n","caseValue":"upper","caseVariant":""},"char17":{"id":"char17","name":"Capital Z","placeholderGlyph":false,"rank":"17","romanized":"Z","type":"consonant","ipaSymbols":"z","caseValue":"upper","caseVariant":""},"char18":{"id":"char18","name":"Capital S","placeholderGlyph":false,"rank":"18","romanized":"S","type":"consonant","ipaSymbols":"s","caseValue":"upper","caseVariant":""},"char19":{"id":"char19","name":"Capital R","placeholderGlyph":false,"rank":"19","romanized":"R","type":"consonant","ipaSymbols":"ɹ","caseValue":"upper","caseVariant":""},"char20":{"id":"char20","name":"Capital L","placeholderGlyph":false,"rank":"20","romanized":"L","type":"consonant","ipaSymbols":"l","caseValue":"upper","caseVariant":""},"char21":{"id":"char21","name":"Capital SHJ","placeholderGlyph":false,"rank":"21","romanized":"SHJ","type":"consonant","ipaSymbols":"ʒ","caseValue":"upper","caseVariant":""},"char22":{"id":"char22","name":"Capital SH","placeholderGlyph":false,"rank":"22","romanized":"SH","type":"consonant","ipaSymbols":"ʃ","caseValue":"upper","caseVariant":""},"char23":{"id":"char23","name":"Capital G","placeholderGlyph":false,"rank":"23","romanized":"G","type":"consonant","ipaSymbols":"ɡ","caseValue":"upper","caseVariant":""},"char24":{"id":"char24","name":"Capital K","placeholderGlyph":false,"rank":"24","romanized":"K","type":"consonant","ipaSymbols":"k","caseValue":"upper","caseVariant":""}}};
