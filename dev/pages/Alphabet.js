import { nbsp } from '../common.js';
import {editCharacter} from '../dialogs/editCharacter.js';

export default class PageAlphabet {
	constructor() {
	}

	load() {
		let alphabetList = makeSortedAlphabetArray();

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
				alphabetList.map((char, index) => `
					<div onclick="editCharacter('${char.id}');" class="rowWrapper">
						<div id="alphabet-grid-${char.id}-name" style="grid-row: ${index+2};" class="firstColumn">${nbsp(char.name)}</div>
						<div id="alphabet-grid-${char.id}-placeholderGlyph" style="grid-row: ${index+2};">${char.placeholderGlyph.makePixelGrid? char.placeholderGlyph.makePixelGrid(2, 0) : ''}</div>
						<div id="alphabet-grid-${char.id}-id" style="grid-row: ${index+2};">${char.id}</div>
						<div id="alphabet-grid-${char.id}-rank" style="grid-row: ${index+2};">${char.rank}</div>
						<div id="alphabet-grid-${char.id}-romanCharacter" style="grid-row: ${index+2};">${char.romanCharacter}</div>
						<div id="alphabet-grid-${char.id}-type" style="grid-row: ${index+2};">${char.type}</div>
						<div id="alphabet-grid-${char.id}-ipaCharacters" style="grid-row: ${index+2};">${char.ipaCharacters.join(', ')}</div>
						<div id="alphabet-grid-${char.id}-caseValue" style="grid-row: ${index+2}; display: ${displayCase};">${char.caseValue ? char.caseValue : ''}</div>
						<div id="alphabet-grid-${char.id}-caseVariant" style="grid-row: ${index+2}; display: ${displayCase};">${char.caseVariant ? char.caseVariant : ''}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}
}

export function makeSortedAlphabetArray() {
	let alphabet = conlangtionary.project.alphabet;
	let alphabetList = [];

	for(let key in alphabet) {
		if(alphabet.hasOwnProperty(key)) {
			alphabetList.push(alphabet[key]);
		}
	}

	alphabetList.sort(function (a, b) { return a.rank - b.rank; });

	return alphabetList;
}
