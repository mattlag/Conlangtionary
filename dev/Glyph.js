
/**
 * A basic, font-free way to define and display
 * a visual representation of a character.
 */
export default class Glyph {
	
	constructor({
		data = 0,
		width = 12,
		height = 20,
	} = {}) {
		this.data = data;
		this.width = width;
		this.height = height;
		this.imgGrid = false;
	}

	get data() {
		if (!this._data) this._data = 0;
		return this._data;
	}
	
	set data(binary) {
		this._data = (''+binary).replace(/\s+/gi, '');
		console.log(this.data);
	}

	get imgGrid() {
		if (this._imgGrid === false) {
			this._imgGrid = [];

			for(let row = 0; row < this.height; row++) {
				for(let col = 0; col < this.width; col++) {
					if(col === 0) this._imgGrid[row] = [];
					this._imgGrid[row][col] = this.data.charAt((row*this.width) + col) || 0;
				}
			}
		
		}

		// console.log(this._imgGrid);
		return this._imgGrid;
	}

	set imgGrid(grid) {
		this._imgGrid = grid;
	}

	getPixelAt(row = 0, col = 0) {
		return !!parseInt(this.imgGrid[row][col]);
	}

	togglePixelAt(row, col) {
		if(!isNaN(row) && !isNaN(col)) {
			let val = getPixelAt(row, col);
			let newval = val? '0' : '1';
			let index = (row*this.width) + col;

			this.data = this.data.substr(0,index) + newval + this.data.substr(index+1);
		}
	}

	makePixelGrid(size = 1, gap = 0) {
		let color = 'black';
		let con = `
			<div
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
				con += `<div title="${row} - ${col}" style="background-color:${this.getPixelAt(row, col)? 'black' : 'white'};"></div>`;
			}
		}

		con += '</div>';

		return con;
	}
}

export const sampleGlyphBinary = `
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