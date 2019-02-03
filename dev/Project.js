import Letter from "./Letter.js";

export default class Project {
	constructor({
		alphabet = {},
		metadata = {},
	} = {}) {
		this.alphabet = {};
		for(let id in alphabet) {
			if(alphabet.hasOwnProperty(id)) {
				this.alphabet[id] = new Letter(alphabet[id]);
			}
		}

		this.metadata = {
			languageName: metadata.languageName || 'Language Name',
			author: metadata.author || 'Author',
		};
	
	}
}

export const latinProject = {
	metadata : {
		languageName: 'Basic Latin',
		author: 'Author',
	}, 

	alphabet : {
		letter01: {name: 'Capital A', rank: 1, romanCharacter: 'A', fontCharacter: 'A'},
		letter02: {name: 'Capital B', rank: 2, romanCharacter: 'B', fontCharacter: 'B'},
		letter03: {name: 'Capital C', rank: 3, romanCharacter: 'C', fontCharacter: 'C'},
		letter04: {name: 'Capital D', rank: 4, romanCharacter: 'D', fontCharacter: 'D'},
		letter05: {name: 'Capital E', rank: 5, romanCharacter: 'E', fontCharacter: 'E'},
		letter06: {name: 'Capital F', rank: 6, romanCharacter: 'F', fontCharacter: 'F'},
		letter07: {name: 'Capital G', rank: 7, romanCharacter: 'G', fontCharacter: 'G'},
		letter08: {name: 'Capital H', rank: 8, romanCharacter: 'H', fontCharacter: 'H'},
		letter09: {name: 'Capital I', rank: 9, romanCharacter: 'I', fontCharacter: 'I'},
		letter10: {name: 'Capital J', rank: 10, romanCharacter: 'J', fontCharacter: 'J'},
		letter11: {name: 'Capital K', rank: 11, romanCharacter: 'K', fontCharacter: 'K'},
		letter12: {name: 'Capital L', rank: 12, romanCharacter: 'L', fontCharacter: 'L'},
		letter13: {name: 'Capital M', rank: 13, romanCharacter: 'M', fontCharacter: 'M'},
		letter14: {name: 'Capital N', rank: 14, romanCharacter: 'N', fontCharacter: 'N'},
		letter15: {name: 'Capital O', rank: 15, romanCharacter: 'O', fontCharacter: 'O'},
		letter16: {name: 'Capital P', rank: 16, romanCharacter: 'P', fontCharacter: 'P'},
		letter17: {name: 'Capital Q', rank: 17, romanCharacter: 'Q', fontCharacter: 'Q'},
		letter18: {name: 'Capital R', rank: 18, romanCharacter: 'R', fontCharacter: 'R'},
		letter19: {name: 'Capital S', rank: 19, romanCharacter: 'S', fontCharacter: 'S'},
		letter20: {name: 'Capital T', rank: 20, romanCharacter: 'T', fontCharacter: 'T'},
		letter21: {name: 'Capital U', rank: 21, romanCharacter: 'U', fontCharacter: 'U'},
		letter22: {name: 'Capital V', rank: 22, romanCharacter: 'V', fontCharacter: 'V'},
		letter23: {name: 'Capital W', rank: 23, romanCharacter: 'W', fontCharacter: 'W'},
		letter24: {name: 'Capital X', rank: 24, romanCharacter: 'X', fontCharacter: 'X'},
		letter25: {name: 'Capital Y', rank: 25, romanCharacter: 'Y', fontCharacter: 'Y'},
		letter26: {name: 'Capital Z', rank: 26, romanCharacter: 'Z', fontCharacter: 'Z'},
	}
};