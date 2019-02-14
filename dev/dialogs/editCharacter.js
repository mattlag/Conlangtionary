import PlaceholderGlyph from '../objects/PlaceholderGlyph.js';
import Character, { letterDescriptions } from '../objects/Character.js';
import { openDialog } from '../dialogs/Dialog.js';
import { nbsp } from '../common.js';
import { chooserLetterID } from './ChooserCharacterID.js';

/**
 * Edit or Create New character
 * on the Alphabet page
 */

export function editCharacter(charID) {
	console.log(`editCharacter dialog passed ${charID}`);
	if(charID === 'create_new_letter') {
		charID = generateNewLetterID();
		conlangtionary.project.alphabet[charID] = new Character({id: charID});
		document.getElementById('app').innerHTML = conlangtionary.nav.pages.alphabet.load();
	}

	if(!charID) return;

	let char = conlangtionary.project.getCharacter(charID);
	// console.log(char);
	if(!char.placeholderGlyph) char.placeholderGlyph = new PlaceholderGlyph();
	
	let displayCase = conlangtionary.project.settings.hasCases ? 'contents' : 'none';

	openDialog(`
		<h2>${char.name}</h2>
		<h3>Character ID: ${char.id}</h3>
		<div class="settingsGrid">
			<label class="name">${nbsp('Name:')}</label>
			<span class="value">
				<input type="text" value="${char.name}" onchange="updateCharacter('${charID}', 'name', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.name}</span>

			<label class="name">${nbsp('Rank:')}</label>
			<span class="value">
				<input type="text" value="${char.rank}" onchange="updateCharacter('${charID}', 'rank', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.rank}</span>

			<label class="name">${nbsp('Romanized translation:')}</label>
			<span class="value">
				<input type="text" value="${char.romanCharacter}" onchange="updateCharacter('${charID}', 'romanCharacter', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.romanCharacter}</span>

			<label class="name">${nbsp('Type:')}</label>
			<span class="value">
				<select onchange="updateCharacter('${charID}', 'type', this.value);">
					<option value="vowel" ${char.type === 'vowel'? 'selected' : ''}>Vowel</option>
					<option value="consonant" ${char.type === 'consonant'? 'selected' : ''}>Consonant</option>
					<option value="char" ${char.type === 'char'? 'selected' : ''}>Character</option>
					<option value="numeral" ${char.type === 'numeral'? 'selected' : ''}>Numeral</option>
					<option value="punctuation" ${char.type === 'punctuation'? 'selected' : ''}>Punctuation</option>
					<option value="accent" ${char.type === 'accent'? 'selected' : ''}>Accent</option>
					<option value="symbol" ${char.type === 'symbol'? 'selected' : ''}>Symbol</option>
					<option value="other" ${char.type === 'other'? 'selected' : ''}>Other</option>
				</select>
			</span>
			<span class="description">${letterDescriptions.type}</span>

			<label class="name">${nbsp('IPA characters:')}</label>
			<span class="value">
				<input type="text" value="${char.ipaCharacters}" onclick="chooserIPA();" onchange="updateCharacter('${charID}', 'ipaCharacters', this.value);"/>
			</span>
			<span class="description">${letterDescriptions.ipaCharacters}</span>

			<div class="rowWrapper" style="display:${displayCase} !important;">
				<label class="name">${nbsp('Case:')}</label>
				<span class="value">
					<select onchange="updateCharacter('${charID}', 'caseValue', this.value);">
						<option value="upper" ${char.caseValue === 'upper'? 'selected' : ''}>Upper Case</option>
						<option value="lower" ${char.caseValue === 'lower'? 'selected' : ''}>Lower Case</option>
						<option value="na" ${char.caseValue === 'na'? 'selected' : ''}>Not applicable</option>
					</select>
				</span>
				<span class="description">${letterDescriptions.caseValue}</span>

				<label class="name">${nbsp('Case variant:')}</label>
				<span class="value">
					${chooserLetterID('caseVariant', charID)}
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
				${char.placeholderGlyph.makeEditGrid(10, 1, 'black', 'white', charID)}
			</span>
			<span style="grid-column: 2;">
				<button style="width: 80px; margin-bottom: 6px;" onclick="updateLetterWidth('${char.id}', true);">width +</button><br>
				<button style="width: 80px; margin-bottom: 6px;" onclick="updateLetterWidth('${char.id}', false);">width -</button><br>
			</span>
			<span class="description" style="grid-column: 3;">
				Click a square to toggle between black and white.<br>
				Hold down [shift] to hover-paint black.<br>
				Hold down [ctrl] to hover-paint white.
			</span>
		</div>

	`);
};

function generateNewLetterID() {
	let newID = '';
	let suffix = 1;

	while(true) {
		if(suffix < 10) {
			newID = '' + conlangtionary.charIDPrefix + '0' + suffix;
			if(!conlangtionary.project.alphabet[newID]) return newID;
		} else {
			newID = '' + conlangtionary.charIDPrefix + suffix;
			if(!conlangtionary.project.alphabet[newID]) return newID;
		}

		suffix++;
	}
}

window.updateCharacter = function(charID, prop, value) {
	let char = conlangtionary.project.getCharacter(charID);
	if(char) char[prop] = value;

	let gridval = document.getElementById('alphabet-grid-'+charID+'-'+prop);
	// console.log(gridval);
	
	if(gridval) {
		gridval.innerHTML = value;
	}
};

window.updateLetterWidth = function(charID, increase) {
	let char = conlangtionary.project.getCharacter(charID);

	if(increase) char.placeholderGlyph.increaseWidth();
	else char.placeholderGlyph.decreaseWidth();

	updatePlaceholderGrids(charID, char);
};

function updatePlaceholderGrids(charID, char) {
	let gridval = document.getElementById('alphabet-grid-'+charID+'-placeholderGlyph');
	if(gridval) gridval.innerHTML = char.placeholderGlyph.makePixelGrid(2, 0);

	let editval = document.getElementById('edit-placeholderGlyph');
	if(editval) editval.innerHTML = char.placeholderGlyph.makeEditGrid(10, 1, 'black', 'white', charID);
}

window.togglePixel = function(charID, row, col) {
	// console.log(`window.togglePixel ${charID}, ${row}, ${col}`);
	let char = conlangtionary.project.getCharacter(charID);
	char.placeholderGlyph.togglePixelAt(row, col);

	updatePlaceholderGrids(charID, char);
};

window.hoverPixel = function (event, charID, row, col) {
	// console.log(`window.togglePixel ${charID}, ${row}, ${col}`);
	event = event || window.event;
	let brush;
	
	if(event.shiftKey) brush = 1;
	else if(event.ctrlKey) brush = 0;
	else return;
	
	let char = conlangtionary.project.getCharacter(charID);
	char.placeholderGlyph.setPixelAt(row, col, brush);
	
	updatePlaceholderGrids(charID, char);
};
