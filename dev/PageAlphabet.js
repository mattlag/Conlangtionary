import Glyph from './Glyph.js';

export default class PageAlphabet {
	constructor() {
		this.tempGlyph = new Glyph();
		this.tempGlyph.data = `
			1 0 0 0 0 0 0 0 0 0 0 0 
			1 1 0 0 0 0 0 0 0 0 0 0 
			0 1 1 0 0 0 0 0 0 0 0 0 
			0 0 1 1 0 0 0 0 0 0 0 0 
			0 0 0 1 1 0 0 0 0 0 0 0 
			0 0 0 0 1 1 0 0 0 0 0 0 
			0 0 0 0 0 1 1 0 0 0 0 0 
			0 0 0 0 0 1 1 0 0 0 0 0 
			0 0 0 0 0 1 1 0 0 0 0 0 
			0 0 0 0 0 1 1 0 0 0 0 0 
			0 0 0 0 1 1 1 1 0 0 0 0 
			0 0 0 1 1 0 0 1 1 0 0 0 
			0 0 1 1 0 0 0 0 1 1 0 0 
			0 1 1 0 0 0 0 0 0 1 1 0 
			1 1 0 0 0 0 0 0 0 0 1 1 
			1 0 0 0 0 0 0 0 0 0 0 1 
			0 0 0 0 0 0 0 0 0 0 0 0 
			0 0 0 0 0 0 0 0 0 0 0 0 
			0 0 0 0 0 0 0 0 0 0 0 0 
			0 0 0 0 0 0 0 0 0 0 0 0	
		`;
	}

	load() {
		let content = '<h1>Alphabet</h1>';
		// content += '<button class="command">Add Letter</button>';
		// content += '<button class="command" disabled>Remove Letter</button>';
		content += this.tempGlyph.makePixelGrid(8, 1);
		content += this.tempGlyph.makePixelGrid(4);
		content += this.tempGlyph.makePixelGrid(1);
		return content;
	}
}