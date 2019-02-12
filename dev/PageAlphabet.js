import PlaceholderGlyph, { sampleGlyph6by10 } from './PlaceholderGlyph.js';
import { openDialog, nbsp } from './main.js';
import Letter, { letterDescriptions } from './Letter.js';

export default class PageAlphabet {
	constructor() {
	}

	load() {
		let alphabetList = [];
		let alphabet = conlangtionary.project.alphabet;

		for(let key in alphabet) {
			if(alphabet.hasOwnProperty(key)) {
				alphabetList.push(alphabet[key]);
			}
		}
		
		alphabetList.sort(function (a, b) { return a.rank - b.rank; });
		let showCaseVariant = conlangtionary.project.settings.caseVariants ? 'block' : 'none';

		let content = `
		<h1>
			Alphabet
			&nbsp;
			<button onclick="editLetter('create_new_letter');">Add Letter</button>
		</h1>
		<div class="grid">
			<div class="gridHeader firstColumn">Name</div>
			<div class="gridHeader">Placeholder</div>
			<div class="gridHeader">Letter ID</div>
			<div class="gridHeader">Rank</div>
			<div class="gridHeader">Romanized</div>
			<div class="gridHeader">IPA</div>
			<div class="gridHeader" style="display: ${showCaseVariant};">Case Variant</div>
			${
				alphabetList.map((letter, index) => `
					<div onclick="editLetter('${letter.id}');" class="rowWrapper">
						<div id="alphabet-grid-${letter.id}-name" style="grid-row: ${index+2};" class="firstColumn">${nbsp(letter.name)}</div>
						<div id="alphabet-grid-${letter.id}-placeholderGlyph" style="grid-row: ${index+2};">${letter.placeholderGlyph.makePixelGrid? letter.placeholderGlyph.makePixelGrid(2, 0) : ''}</div>
						<div id="alphabet-grid-${letter.id}-id" style="grid-row: ${index+2};">${letter.id}</div>
						<div id="alphabet-grid-${letter.id}-rank" style="grid-row: ${index+2};">${letter.rank}</div>
						<div id="alphabet-grid-${letter.id}-romanCharacter" style="grid-row: ${index+2};">${letter.romanCharacter}</div>
						<div id="alphabet-grid-${letter.id}-ipaCharacters" style="grid-row: ${index+2};">${letter.ipaCharacters.join(', ')}</div>
						<div id="alphabet-grid-${letter.id}-showCaseVariant" style="grid-row: ${index+2}; display: ${showCaseVariant};">${letter.caseVariant ? letter.caseVariant : ''}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}
}

function generateNewLetterID() {
	let newID = '';
	let suffix = 1;

	while(true) {
		if(suffix < 10) {
			newID = '' + conlangtionary.letterPrefix + '0' + suffix;
			if(!conlangtionary.project.alphabet[newID]) return newID;
		} else {
			newID = '' + conlangtionary.letterPrefix + suffix;
			if(!conlangtionary.project.alphabet[newID]) return newID;
		}

		suffix++;
	}
}

window.editLetter = function(letterID) {
	if(letterID === 'create_new_letter') {
		letterID = generateNewLetterID();
		conlangtionary.project.alphabet[letterID] = new Letter({id: letterID});
		document.getElementById('app').innerHTML = conlangtionary.nav.pages.alphabet.load();
	}

	let letter = getLetter(letterID);
	let showCaseVariant = conlangtionary.project.settings.caseVariants ? 'block' : 'none';
	letter.placeholderGlyph = letter.placeholderGlyph? letter.placeholderGlyph : new PlaceholderGlyph();

	openDialog(`
		<h2>${letter.name}</h2>
		<h3>Letter ID: ${letter.id}</h3>
		<div class="settingsGrid">
			<label class="name">Name:</label>
			<span class="value">
				<input type="text" value="${letter.name}" onchange="updateLetter('${letterID}', 'name', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.name}</span>

			<label class="name">Rank:</label>
			<span class="value">
				<input type="text" value="${letter.rank}" onchange="updateLetter('${letterID}', 'rank', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.rank}</span>

			<label class="name">Romanized&nbsp;translation:</label>
			<span class="value">
				<input type="text" value="${letter.romanCharacter}" onchange="updateLetter('${letterID}', 'romanCharacter', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.romanCharacter}</span>

			<label class="name">IPA&nbsp;characters:</label>
			<span class="value">
				<input type="text" value="${letter.ipaCharacters}" onchange="updateLetter('${letterID}', 'ipaCharacters', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.ipaCharacters}</span>

			<div class="rowWrapper" style="display:${showCaseVariant};">
				<label class="name">Case&nbsp;variant:</label>
				<span class="value">
					<input type="text" value="${letter.caseVariant}" onchange="updateLetter('${letterID}', 'caseVariant', this.value);"/>
				</span>
				<span class="description">${letterDescriptions.caseVariant}</span>
			</div>
		</div>
		<br><br>

		<h3>Placeholder glyph</h3>
		<span class="description">
			A very simple representation of this glyph in your conlang.<br>
			You can adjust the height of all placeholder glyphs in Settings.
		</span>
		<br><br>
		<div class="grid">
			<span style="grid-column: 1;" id="edit-placeholderGlyph">
				${letter.placeholderGlyph.makeEditGrid(10, 1, 'black', 'white', letterID)}
			</span>
			<span style="grid-column: 2;">
				<button style="width: 80px; margin-bottom: 6px;" onclick="updateLetterWidth('${letter.id}', true);">width +</button><br>
				<button style="width: 80px; margin-bottom: 6px;" onclick="updateLetterWidth('${letter.id}', false);">width -</button><br>
			</span>
			<span class="description" style="grid-column: 3;">
				Click a square to toggle between black and white.<br>
				Hold down [shift] to hover-paint black.<br>
				Hold down [ctrl] to hover-paint white.
			</span>
		</div>

	`);
};

function getLetter(letterID) {
	if(conlangtionary.project.alphabet[letterID]) {
		return conlangtionary.project.alphabet[letterID];
	}

	// console.warn(`Could not find letter with id: ${letterID}`);
	return false;
}

window.updateLetter = function(id, prop, value) {
	let letter = getLetter(id);
	if(letter) {
		letter[prop] = value;
	}

	let gridval = document.getElementById('alphabet-grid-'+id+'-'+prop);
	// console.log(gridval);
	
	if(gridval) {
		gridval.innerHTML = value;
	}
};

window.updateLetterWidth = function(id, increase) {
	let letter = getLetter(id);

	if(increase) letter.placeholderGlyph.increaseWidth();
	else letter.placeholderGlyph.decreaseWidth();

	updatePlaceholderGrids(id, letter);
};

function updatePlaceholderGrids(id, letter) {
	let gridval = document.getElementById('alphabet-grid-'+id+'-placeholderGlyph');
	if(gridval) gridval.innerHTML = letter.placeholderGlyph.makePixelGrid(2, 0);

	let editval = document.getElementById('edit-placeholderGlyph');
	if(editval) editval.innerHTML = letter.placeholderGlyph.makeEditGrid(10, 1, 'black', 'white', id);
}

window.togglePixel = function(id, row, col) {
	// console.log(`window.togglePixel ${id}, ${row}, ${col}`);
	let letter = getLetter(id);
	letter.placeholderGlyph.togglePixelAt(row, col);

	updatePlaceholderGrids(id, letter);
};

window.hoverPixel = function (event, id, row, col) {
	// console.log(`window.togglePixel ${id}, ${row}, ${col}`);
	event = event || window.event;
	let brush;
	
	if(event.shiftKey) brush = 1;
	else if(event.ctrlKey) brush = 0;
	else return;
	
	let letter = getLetter(id);
	letter.placeholderGlyph.setPixelAt(row, col, brush);
	
	updatePlaceholderGrids(id, letter);
};
