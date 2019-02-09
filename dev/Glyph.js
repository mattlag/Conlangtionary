
/**
 * A basic, font-free way to define and display
 * a visual representation of a character.
 */
export default class Glyph {
	
	constructor({
		data = 0,
		width = 6,
		height = 10,
	} = {}) {
		this.data = data;
		this.width = width;
		this.height = height;
	}

	get data() {
		if (!this._data) this._data = sampleGlyph6by10;
		return this._data;
	}
	
	set data(binary) {
		this._data = (''+binary).replace(/\s+/gi, '');
		// console.log(`set binary data\t${this.data}`);
	}

	getPixelAt(row = 0, col = 0) {
		if(!isNaN(row) && !isNaN(col)) {
			let index = (row*this.width) + col;
			let result = !!parseInt(this.data.charAt(index));
			// console.log(`getPixelAt ${row}, ${col} returning ${result}`);
			return result;
		}

		return undefined;
	}

	togglePixelAt(row, col) {
		if(!isNaN(row) && !isNaN(col)) {
			// console.log(`togglePixelAt ${row}, ${col}`)
			let val = this.getPixelAt(row, col);
			let newval = val? '0' : '1';
			let index = (row*this.width) + col;

			// console.log(`binary data before\t${this.data}`);
			this.data = this.data.substr(0,index) + newval + this.data.substr(index+1);
		}
	}

	makePixelGrid(size = 1, gap = 0, color = 'black', bgColor = 'transparent') {
		let pixValue;

		let con = `
			<div class="pixelGrid"
				style="
					display: grid; 
					grid-template-columns: repeat(${this.width}, ${size}px);
					grid-template-rows: repeat(${this.height}, ${size}px);
					grid-column-gap: ${gap}px;
					grid-row-gap: ${gap}px;
				"
			>`;
	
		for(let row = 0; row < this.height; row++) {
			for(let col = 0; col < this.width; col++) {
				pixValue = this.getPixelAt(row, col);
				// console.log(`makePixelGrid at ${row}, ${col} found ${pixValue}`);
				con += `
				<span style="
				grid-row: ${row+1};
				grid-column: ${col+1};
				width: ${size}px;
				height: ${size}px;
				"
				class="${pixValue? 'selected' : 'unselected'}"
				></span>`;
			}
		}
		
		con += '</div>';
		
		return con;
	}
	
	makeEditGrid(size = 1, gap = 0, color = 'black', bgColor = 'transparent', letterID) {
		let pixValue;
		
		let con = `
		<div class="pixelGrid"
		style="
		display: grid; 
		grid-template-columns: repeat(${this.width}, ${size}px);
		grid-template-rows: repeat(${this.height}, ${size}px);
		grid-column-gap: ${gap}px;
		grid-row-gap: ${gap}px;
		"
		>`;
		
		for(let row = 0; row < this.height; row++) {
			for(let col = 0; col < this.width; col++) {
				pixValue = this.getPixelAt(row, col);
				// console.log(`makeEditGrid at ${row}, ${col} found ${pixValue}`);
				con += `
				<span style="
				grid-row: ${row+1};
				grid-column: ${col+1};
					width: ${size}px;
					height: ${size}px;
				"
				class="${pixValue? 'selected' : 'unselected'}"
				onclick="togglePixel('${letterID}', ${row}, ${col}); this.className = (this.className === 'selected'? 'unselected' : 'selected');"
				></span>`;
			}
		}

		con += '</div>';

		return con;
	}
}

export const sampleGlyph12by20 = `
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

export const sampleGlyph6by10 = `
1 0 0 0 0 0 
1 1 0 0 0 0 
0 1 1 0 0 0 
0 0 1 1 0 0 
0 0 0 1 1 0 
0 0 0 0 1 1 
0 0 0 0 1 1  
0 0 0 0 1 1  
1 1 1 1 1 1  
1 1 1 1 1 0  
`;

/*
function B36toB02(base36) {
	return parseInt('' + base36, 36).toString(2);
}

function B02toB36(binary) {
	console.log(`B02toB36 - passed \n${binary}`);
	binary = (''+binary).replace(/\s\s+/gi, '');
	console.log(`B02toB36 - sanitized \n${binary}`);
	return parseInt('' + binary, 2).toString(36);
}
*/