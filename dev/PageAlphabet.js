import Glyph from './Glyph.js';
import { openDialog } from './main.js';

export default class PageAlphabet {
	constructor() {
	}

	load() {
		let alphabet = [];
		for(let key in conlangtionary.project.alphabet) {
			if(conlangtionary.project.alphabet.hasOwnProperty(key)) {
				alphabet.push(conlangtionary.project.alphabet[key]);
			}
		}
		
		alphabet.sort(function (a, b) { return a.rank - b.rank; });
		let showCaseVariant = conlangtionary.project.settings.caseVariants ? 'block' : 'none';

		let content = `
		<h1>
			Alphabet
			&nbsp;
			<button class="command">Add Letter</button>
		</h1>
		<div class="grid">
			<div class="gridHeader firstColumn">Name</div>
			<div class="gridHeader">Letter ID</div>
			<div class="gridHeader">Rank</div>
			<div class="gridHeader">Romanized</div>
			<div class="gridHeader">IPA</div>
			<div class="gridHeader" style="display: ${showCaseVariant};">Case Variant</div>
			${
				alphabet.map((letter, index) => `
					<div onclick="editLetter('${letter.id}');" class="rowWrapper">
						<div style="grid-row: ${index+2};" class="firstColumn">${letter.name}</div>
						<div style="grid-row: ${index+2};">${letter.id}</div>
						<div style="grid-row: ${index+2};">${letter.rank}</div>
						<div style="grid-row: ${index+2};">${letter.romanCharacter}</div>
						<div style="grid-row: ${index+2};">${letter.ipaCharacters.join(', ')}</div>
						<div style="grid-row: ${index+2}; display: ${showCaseVariant};">${letter.caseVariant ? letter.caseVariant : ''}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}
}

window.editLetter = function(letterID) {
	openDialog(`
		<h2>${letterID}</h2>
	`);
}