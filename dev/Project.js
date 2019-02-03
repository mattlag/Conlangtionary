import Letter from "./Letter.js";

export default class Project {
	constructor({
        settings = {},
		alphabet = {},
	} = {}) {
        this.settings = {
            languageName: settings.languageName || 'Language Name',
            author: settings.author || 'Author',
            caseVariants: true,
        };

        this.alphabet = {};
		for(let id in alphabet) {
			if(alphabet.hasOwnProperty(id)) {
				this.alphabet[id] = new Letter(alphabet[id]);
			}
		}	
	}
}

export const settingsDescriptions = {
    languageName: 'The name of your constructed language.',
    author: 'Name of the person who created this language',
    caseVariants: 'Does this language have Upper and Lower cases.  Used to enable the Case Variant property of letters.',
};

export const latinProject = {
    settings : {
        languageName: 'Basic Latin',
		author: 'Author',
        caseVariants: true,
    },

	alphabet : {
		letter01: {id: 'letter01', name: 'Capital A', rank: 1, romanCharacter: 'A', fontCharacter: 'A'},
		letter02: {id: 'letter02', name: 'Capital B', rank: 2, romanCharacter: 'B', fontCharacter: 'B'},
		letter03: {id: 'letter03', name: 'Capital C', rank: 3, romanCharacter: 'C', fontCharacter: 'C'},
		letter04: {id: 'letter04', name: 'Capital D', rank: 4, romanCharacter: 'D', fontCharacter: 'D'},
		letter05: {id: 'letter05', name: 'Capital E', rank: 5, romanCharacter: 'E', fontCharacter: 'E'},
		letter06: {id: 'letter06', name: 'Capital F', rank: 6, romanCharacter: 'F', fontCharacter: 'F'},
		letter07: {id: 'letter07', name: 'Capital G', rank: 7, romanCharacter: 'G', fontCharacter: 'G'},
		letter08: {id: 'letter08', name: 'Capital H', rank: 8, romanCharacter: 'H', fontCharacter: 'H'},
		letter09: {id: 'letter09', name: 'Capital I', rank: 9, romanCharacter: 'I', fontCharacter: 'I'},
		letter10: {id: 'letter10', name: 'Capital J', rank: 10, romanCharacter: 'J', fontCharacter: 'J'},
		letter11: {id: 'letter11', name: 'Capital K', rank: 11, romanCharacter: 'K', fontCharacter: 'K'},
		letter12: {id: 'letter12', name: 'Capital L', rank: 12, romanCharacter: 'L', fontCharacter: 'L'},
		letter13: {id: 'letter13', name: 'Capital M', rank: 13, romanCharacter: 'M', fontCharacter: 'M'},
		letter14: {id: 'letter14', name: 'Capital N', rank: 14, romanCharacter: 'N', fontCharacter: 'N'},
		letter15: {id: 'letter15', name: 'Capital O', rank: 15, romanCharacter: 'O', fontCharacter: 'O'},
		letter16: {id: 'letter16', name: 'Capital P', rank: 16, romanCharacter: 'P', fontCharacter: 'P'},
		letter17: {id: 'letter17', name: 'Capital Q', rank: 17, romanCharacter: 'Q', fontCharacter: 'Q'},
		letter18: {id: 'letter18', name: 'Capital R', rank: 18, romanCharacter: 'R', fontCharacter: 'R'},
		letter19: {id: 'letter19', name: 'Capital S', rank: 19, romanCharacter: 'S', fontCharacter: 'S'},
		letter20: {id: 'letter20', name: 'Capital T', rank: 20, romanCharacter: 'T', fontCharacter: 'T'},
		letter21: {id: 'letter21', name: 'Capital U', rank: 21, romanCharacter: 'U', fontCharacter: 'U'},
		letter22: {id: 'letter22', name: 'Capital V', rank: 22, romanCharacter: 'V', fontCharacter: 'V'},
		letter23: {id: 'letter23', name: 'Capital W', rank: 23, romanCharacter: 'W', fontCharacter: 'W'},
		letter24: {id: 'letter24', name: 'Capital X', rank: 24, romanCharacter: 'X', fontCharacter: 'X'},
		letter25: {id: 'letter25', name: 'Capital Y', rank: 25, romanCharacter: 'Y', fontCharacter: 'Y'},
		letter26: {id: 'letter26', name: 'Capital Z', rank: 26, romanCharacter: 'Z', fontCharacter: 'Z'},
	}
};