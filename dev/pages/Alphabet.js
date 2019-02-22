import { nbsp } from '../common.js';
import { propertyNames } from '../objects/Character.js';

export default class PageAlphabet {
	constructor(app) {
		this.app = app;
		this.sortBy = 'rank';
	}

	load() {
		let alphabetList = this.app.project.getSortedAlphabetArray(this.sortBy);
		let hasCases = this.app.project.settings.hasCases;

		let content = `
		<h1>
			Alphabet
			&nbsp;
			<button onclick="app.createNewCharacter();">Add Character</button>
		</h1>
		<div class="grid">
			${this.header('name')}
			${this.header('placeholderGlyph', 'rank')}
			${this.header('id')}
			${this.header('rank')}
			${this.header('romanized')}
			${this.header('type')}
			${this.header('ipaSymbols')}
			${this.header('caseValue', 'caseValue', hasCases)}
			${this.header('caseVariant', 'caseVariant', hasCases)}

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
						<div id="alphabet-grid-${char.id}-caseValue" style="grid-row: ${index+2}; display: ${hasCases? 'block' : 'none'};">${char.caseValue ? char.caseValue : ''}</div>
						<div id="alphabet-grid-${char.id}-caseVariant" style="grid-row: ${index+2}; display: ${hasCases? 'block' : 'none'};">${char.caseVariant ? char.caseVariant : ''}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}

	header(value, sortValue, show = true) {
		sortValue = sortValue || value;

		if(show) {
			let sortable = this.app.nav.pages.alphabet.sortBy !== value;
			return `
				<div 
					${sortable? `onclick="app.nav.pages.alphabet.sortColumnsBy('${sortValue}');" ` : ''}
					${sortable? 'class="gridHeader sortable"' : 'class="gridHeader sorted"'} 
				>
					${nbsp(
						propertyNames[value] + 
						(sortable? '&emsp;&thinsp;' : ' ⯆')
					)}
				</div>
			`;
		}

		return '';
	}

	sortColumnsBy(value) {
		this.sortBy = value;
		this.app.reloadContent();
	}
}
