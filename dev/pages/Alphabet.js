import { nbsp } from '../common.js';
import {editCharacter} from '../dialogs/editCharacter.js';

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
		let displayCase = conlangtionary.project.settings.hasCases ? 'block' : 'none';

		let content = `
		<h1>
			Alphabet
			&nbsp;
			<button onclick="editCharacter('create_new_letter');">Add Character</button>
		</h1>
		<div class="grid">
			<div class="gridHeader firstColumn">${nbsp('Name')}</div>
			<div class="gridHeader">${nbsp('Placeholder')}</div>
			<div class="gridHeader">${nbsp('Character ID')}</div>
			<div class="gridHeader">${nbsp('Rank')}</div>
			<div class="gridHeader">${nbsp('Romanized')}</div>
			<div class="gridHeader">${nbsp('Type')}</div>
			<div class="gridHeader">${nbsp('IPA')}</div>
			<div class="gridHeader" style="display: ${displayCase};">${nbsp('Case')}</div>
			<div class="gridHeader" style="display: ${displayCase};">${nbsp('Case Variant')}</div>
			${
				alphabetList.map((letter, index) => `
					<div onclick="editCharacter('${letter.id}');" class="rowWrapper">
						<div id="alphabet-grid-${letter.id}-name" style="grid-row: ${index+2};" class="firstColumn">${nbsp(letter.name)}</div>
						<div id="alphabet-grid-${letter.id}-placeholderGlyph" style="grid-row: ${index+2};">${letter.placeholderGlyph.makePixelGrid? letter.placeholderGlyph.makePixelGrid(2, 0) : ''}</div>
						<div id="alphabet-grid-${letter.id}-id" style="grid-row: ${index+2};">${letter.id}</div>
						<div id="alphabet-grid-${letter.id}-rank" style="grid-row: ${index+2};">${letter.rank}</div>
						<div id="alphabet-grid-${letter.id}-romanCharacter" style="grid-row: ${index+2};">${letter.romanCharacter}</div>
						<div id="alphabet-grid-${letter.id}-type" style="grid-row: ${index+2};">${letter.type}</div>
						<div id="alphabet-grid-${letter.id}-ipaCharacters" style="grid-row: ${index+2};">${letter.ipaCharacters.join(', ')}</div>
						<div id="alphabet-grid-${letter.id}-caseValue" style="grid-row: ${index+2}; display: ${displayCase};">${letter.caseValue ? letter.caseValue : ''}</div>
						<div id="alphabet-grid-${letter.id}-caseVariant" style="grid-row: ${index+2}; display: ${displayCase};">${letter.caseVariant ? letter.caseVariant : ''}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}
}
