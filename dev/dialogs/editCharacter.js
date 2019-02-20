import PlaceholderGlyph from '../objects/PlaceholderGlyph.js';
import Character, { propertyDescriptions, propertyNames } from '../objects/Character.js';
import { openDialog, showToast } from '../dialogs/Dialog.js';
import { nbsp } from '../common.js';
import { chooserLetterID } from './ChooserCharacterID.js';
import { app } from '../main.js';

/**
 * Edit or Create New character
 * on the Alphabet page
 */

export function editCharacter(charID) {
	conlog(`editCharacter dialog passed ${charID}`);
	if(!charID) return;

	let char = app.project.getCharacter(charID);
	// conlog(char);
	if(!char.placeholderGlyph) char.placeholderGlyph = new PlaceholderGlyph();
	
	let displayCase = app.project.settings.hasCases ? 'contents' : 'none';

	openDialog(`
		<h2>${char.name}</h2>
		<h3>Character ID: ${char.id}</h3>
		<div class="settingsGrid">
			<label class="name">${nbsp(`${propertyNames.name}:`)}</label>
			<span class="value">
				<input type="text" value="${char.name}" onchange="app.project.character('${charID}', 'name', this.value);"/>
			</span>
			<span class="description">${propertyDescriptions.name}</span>

			<label class="name">${nbsp(`${propertyNames.rank}:`)}</label>
			<span class="value">
				<input type="text" value="${char.rank}" onchange="app.project.character('${charID}', 'rank', this.value);"/>
			</span>
			<span class="description">${propertyDescriptions.rank}</span>

			<label class="name">${nbsp(`${propertyNames.romanized}:`)}</label>
			<span class="value">
				<input type="text" value="${char.romanized}" onchange="app.project.character('${charID}', 'romanized', this.value);"/>
			</span>
			<span class="description">${propertyDescriptions.romanized}</span>

			<label class="name">${nbsp(`${propertyNames.type}:`)}</label>
			<span class="value">
				<select onchange="app.project.character('${charID}', 'type', this.value);">
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
			<span class="description">${propertyDescriptions.type}</span>

			<label class="name">${nbsp(`${propertyNames.ipaSymbols}:`)}</label>
			<span class="value">
				<input type="text" value="${char.ipaSymbols}" onchange="app.project.character('${charID}', 'ipaSymbols', this.value);"/>
			</span>
			<span class="description">
				<button onclick="chooserIPA();" title="Show IPA Table\nto copy/paste symbols">▦</button>
				${propertyDescriptions.ipaSymbols}
			</span>

			<div class="rowWrapper" style="display:${displayCase} !important;">
				<label class="name">${nbsp(`${propertyNames.caseValue}:`)}</label>
				<span class="value">
					<select onchange="app.project.character('${charID}', 'caseValue', this.value);">
						<option value="upper" ${char.caseValue === 'upper'? 'selected' : ''}>Upper Case</option>
						<option value="lower" ${char.caseValue === 'lower'? 'selected' : ''}>Lower Case</option>
						<option value="na" ${char.caseValue === 'na'? 'selected' : ''}>Not applicable</option>
					</select>
				</span>
				<span class="description">${propertyDescriptions.caseValue}</span>

				<label class="name">${nbsp(`${propertyNames.caseVariant}:`)}</label>
				<span class="value">
					${chooserLetterID('caseVariant', charID)}
				</span>
				<span class="description">${propertyDescriptions.caseVariant}</span>
			</div>
		</div>
		<br>
		<button onclick="app.showDeleteCharConfirmDialog('${charID}');">Delete this character</button>
		<button onclick="app.duplicateCharacter('${charID}');">Duplicate this character</button>
		<button onclick="app.duplicateCharacter('${charID}', true);">Create a case variant of this character</button>
		<br><br>
		<hr>
		<br><br>

		<h3>Placeholder glyph</h3>
		<span class="description">
			A very simple representation of this glyph in your conlang.<br>
			You can adjust the height of all placeholder glyphs in Settings.
		</span>
		<br><br>
		<div class="grid">
			<span style="grid-column: 1;" id="edit-placeholderGlyph">
				${char.placeholderGlyph.makeEditGrid(10, 1, charID)}
			</span>
			<span style="grid-column: 2;">
				<button style="width: 80px; margin-bottom: 6px;" onclick="app.letterWidth('${char.id}', true);">width +</button><br>
				<button style="width: 80px; margin-bottom: 6px;" onclick="app.letterWidth('${char.id}', false);">width -</button><br>
				<button style="width: 80px; margin-bottom: 6px;" onclick="app.copyPlaceholderGlyphData('${char.id}');">Copy data</button><br>
				<button style="width: 80px; margin-bottom: 6px;" onclick="app.pastePlaceholderGlyphData('${char.id}');"${app.clipboard? '' : ' disabled'}>Paste data</button><br>
				
			</span>
			<span class="description" style="grid-column: 3;">
				Click a square to toggle between black and white.<br>
				Hold down [shift] to hover-paint black.<br>
				Hold down [ctrl] to hover-paint white.
			</span>
		</div>

	`);
}
