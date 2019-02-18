import { nbsp } from '../common.js';

export default class PageAlphabet {
	constructor(app) {
		this.app = app;
	}

	load() {
		let alphabetList = this.app.project.getSortedAlphabetArray();

		let displayCase = this.app.project.settings.hasCases ? 'block' : 'none';

		let content = `
		<h1>
			Alphabet
			&nbsp;
			<button onclick="app.openEditCharacterDialog(app.project.createNewCharacter());">Add Character</button>
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
					<div onclick="app.openEditCharacterDialog('${char.id}');" class="rowWrapper">
						<div id="alphabet-grid-${char.id}-name" style="grid-row: ${index+2};" class="firstColumn">${nbsp(char.name)}</div>
						<div id="alphabet-grid-${char.id}-placeholderGlyph" style="grid-row: ${index+2};">${char.placeholderGlyph.makeDisplayChar? char.placeholderGlyph.makeDisplayChar() : ''}</div>
						<div id="alphabet-grid-${char.id}-id" style="grid-row: ${index+2};">${char.id}</div>
						<div id="alphabet-grid-${char.id}-rank" style="grid-row: ${index+2};">${char.rank}</div>
						<div id="alphabet-grid-${char.id}-romanized" style="grid-row: ${index+2};">${char.romanized}</div>
						<div id="alphabet-grid-${char.id}-type" style="grid-row: ${index+2};">${char.type}</div>
						<div id="alphabet-grid-${char.id}-ipaSymbols" style="grid-row: ${index+2};">${char.ipaSymbols}</div>
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
