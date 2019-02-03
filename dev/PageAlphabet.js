import Glyph from './Glyph.js';

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

		let content = `
		<h1>Alphabet</h1>
		<button class="command">Add Letter</button> <button class="command" disabled>Remove Letter</button>
		<div class="grid">
			<div class="gridHeader">Name</div>
			<div class="gridHeader">Rank</div>
			<div class="gridHeader">Romanized</div>
			<div class="gridHeader">IPA</div>
			${
				alphabet.map((letter, index) => `
					<div class="rowWrapper">
						<div style="grid-row: ${index+2};">${letter.name}</div>
						<div style="grid-row: ${index+2};">${letter.rank}</div>
						<div style="grid-row: ${index+2};">${letter.romanCharacter}</div>
						<div style="grid-row: ${index+2};">${letter.ipaCharacters.join(', ')}</div>
					</div>
				`).join('')
			}
		</div>
		`;
		return content;
	}
}