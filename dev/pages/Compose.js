
export default class PageCompose {
	constructor(app) {
		this.app = app;
		this.romanized = '';
		this.conlang = '';
	}

	load() {
		let content = `
			<h1>Compose</h1>
			<div class="twoColumn">
				<div style="grid-column: 1;">
					<h2>Romanized</h2>
					<textarea 
						onkeyup="app.nav.pages.compose.updateCompose();" 
						id="composeRomanized"
					>${this.romanized}</textarea>
				</div>

				<div style="grid-column: 2;">
					<h2>${this.app.project.settings.languageName}</h2>
					<div id="composeConlang">${this.conlang}</div>
				</div>
			</div>		
		`;

		return content;
	}

	updateCompose() {
		let source = document.getElementById('composeRomanized').value;
		this.romanized = source;

		let resultCharPXHeight = 20;
		let unitSize = resultCharPXHeight / this.app.project.settings.placeholderGlyphHeight;
		let spaceWidth = this.app.project.settings.spaceWidth * unitSize;
		let lineSpacing = this.app.project.settings.lineSpacingHeight * unitSize;

		let result = '';

		let paragraphs = source.split('\n');
		paragraphs.forEach(paragraph => {
			result += `<div class="paragraph" style="margin-bottom: ${lineSpacing}px;">`;
			let words = paragraph.split(' ');
			words.forEach(word =>{
				let chars = this.app.project.getCharacterArray(word);
				result += `<div class="word" style="margin:0px ${spaceWidth}px ${lineSpacing}px 0px;">`;
				chars.forEach(char => {
					let character = this.app.project.getCharacterByRomanized(char);
					if(character) {
						result += character.placeholderGlyph.makeDisplayChar(resultCharPXHeight);
					}
				});
				result += '</div>';
			});
			result += '</div>';
		});

		document.getElementById('composeConlang').innerHTML = result;
		this.conlang = result;
	}
}