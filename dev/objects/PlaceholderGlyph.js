
/**
 * A basic, font-free way to define and display
 * a visual representation of a character.
 */
export default class PlaceholderGlyph {
	
	constructor({
		data = 0,
		width = 6,
	} = {}) {
		this.data = data;
		this.width = width;
	}

	toJSON() {
		return {
			data: this.data,
			width: this.width,
		};
	}
	
	get data() {
		if (!this._data){
			this._data = '';
			for(let i=0; i<this.width * this.height; i++) this._data += '0';
		}
		return this._data;
	}
	
	set data(binary) {
		this._data = (''+binary).replace(/\s+/gi, '');
		// conlog(`set binary data\t${this.data}`);
	}

	get height() {
		return window.conlangtionary.project.settings.placeholderGlyphHeight;
	}

	getPixelAt(row = 0, col = 0) {
		if(!isNaN(row) && !isNaN(col)) {
			let index = (row*this.width) + col;
			
			if(this.data.length < index) {
				for(let i=this.data.length; i<index; i++) this.data += '0';
			}

			let result = !!parseInt(this.data.charAt(index));
			// conlog(`getPixelAt ${row}, ${col} returning ${result}`);
			return result;
		}

		return undefined;
	}

	setPixelAt(row = 0, col = 0, val = 0) {
		if(!isNaN(row) && !isNaN(col)) {
			// conlog(`togglePixelAt ${row}, ${col}`)
			let index = (row*this.width) + col;
			
			if(this.data.length < index) {
				for(let i=this.data.length; i<index; i++) this.data += '0';
			}

			// conlog(`binary data before\t${this.data}`);
			this.data = this.data.substr(0,index) + val + this.data.substr(index+1);
		}
	}

	togglePixelAt(row, col) {
		if(!isNaN(row) && !isNaN(col)) {
			// conlog(`togglePixelAt ${row}, ${col}`);
			let val = this.getPixelAt(row, col);
			let newval = val? '0' : '1';
			let index = (row*this.width) + col;
			
			if(this.data.length < index) {
				for(let i=this.data.length; i<index; i++) this.data += '0';
			}

			// conlog(`binary data before\t${this.data}`);
			this.data = this.data.substr(0,index) + newval + this.data.substr(index+1);
		}
	}

	increaseWidth() {
		let newData = '';
		let index = 0;
		let char = this.data.charAt(index);
			
		for(let i=this.data.length; i<this.width * this.height; i++) this.data += '0';
		
		while(char) {
			newData += '' + char;

			if((index+1) % this.width === 0) {
				// conlog(`Extra zero at ${index}`)
				newData += '0';
			}

			index++;
			char = this.data.charAt(index);
		}

		// conlog(`new / old data\n${newData}\n${this.data}`);
		this.data = newData;
		this.width += 1;
	}

	decreaseWidth() {
		if(this.width === 1) return;

		let newData = '';
		let index = 0;
		let char = this.data.charAt(index);

		while(char) {
			if((index+1) % this.width !== 0) {
				newData += char;
			} else {
				// conlog(`Not putting zero at ${index}`);
			}

			index++;
			char = this.data.charAt(index);
		}

		// conlog(`new / old data\n${newData}\n${this.data}`);
		this.data = newData;
		this.width -= 1;
	}

	makePixelGrid(size = 1, gap = 0, color = 'black', bgColor = 'transparent') {
		let pixValue;

		let con = `<div class="pixelGridWrapper">
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
				// conlog(`makePixelGrid at ${row}, ${col} found ${pixValue}`);
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
		
		con += '</div></div>';
		
		return con;
	}
	
	makeEditGrid(size = 1, gap = 0, color = 'black', bgColor = 'transparent', charID) {
		let pixValue;
		
		let con = `<div class="pixelGridWrapper" style="">
			<div class="pixelGrid"
				style="
					display: grid; 
					grid-template-columns: repeat(${this.width}, ${size}px);
					grid-template-rows: repeat(${this.height}, ${size}px);
					grid-column-gap: ${gap}px;
					grid-row-gap: ${gap}px;
					width: ${(this.width * size) + ((this.width - 1) * gap)}px; 
				"
		>`;
		
		for(let row = 0; row < this.height; row++) {
			for(let col = 0; col < this.width; col++) {
				pixValue = this.getPixelAt(row, col);
				// conlog(`makeEditGrid at ${row}, ${col} found ${pixValue}`);
				con += `
					<span style="
						grid-row: ${row+1};
						grid-column: ${col+1};
						width: ${size}px;
						height: ${size}px;
					"
					class="${pixValue? 'selected' : 'unselected'}"
					onclick="togglePixel('${charID}', ${row}, ${col});"
					onmouseover="hoverPixel(event, '${charID}', ${row}, ${col});"
				></span>`;
			}
		}

		con += '</div></div>';

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
	// conlog(`B02toB36 - passed \n${binary}`);
	binary = (''+binary).replace(/\s\s+/gi, '');
	// conlog(`B02toB36 - sanitized \n${binary}`);
	return parseInt('' + binary, 2).toString(36);
}
*/