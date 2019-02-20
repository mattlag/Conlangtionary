import Project, { sampleProject } from './objects/Project.js';
import PageWelcome from './pages/Welcome.js';
import PageAlphabet from './pages/Alphabet.js';
import PageDictionary from './pages/Dictionary.js';
import PageSettings from './pages/Settings.js';
import PageHelp from './pages/Help.js';
import {editCharacter} from './dialogs/editCharacter.js';
import { openDialog, showToast } from './dialogs/Dialog.js';
import { clone } from './common.js';
import { app } from './main.js';

export default class App {
	constructor() {
		conlog('App - start');
		this.devMode =true;
		this.nav = {
			currentPage: 'welcome',
			pages: {
				welcome: new PageWelcome(this),
				alphabet: new PageAlphabet(this),
				dictionary: new PageDictionary(this),
				settings: new PageSettings(this),
				help: new PageHelp(this),
			}
		};
		this.project = new Project(sampleProject);
		this.dialogCloseFunctions = [];
		window.conlog = conlog;
		conlog('App - end');
	}

	navigate(page = 'welcome') {
		conlog(`loading page: ${page}`);

		this.nav.currentPage = page;

		clearNavButtonSelectedStates();		
		document.getElementById('navButton-'+page).setAttribute('selected', 'true');
		
		this.reloadContent();

		conlog(`page load complete`);
	}

	closeAllDialogs() {
		let fun = this.dialogCloseFunctions;
		for(let key in fun) {
			if(fun.hasOwnProperty(key)) {
				fun[key]();
			}
		}
	}

	reloadContent() {
		let con = document.getElementById('content');
		if(con) {
			// conlog(`reloadContent - loading ${this.nav.currentPage}`);
			con.innerHTML = this.nav.pages[this.nav.currentPage].load();	
			document.getElementById('langNameTitle').innerHTML = this.project.settings.languageName;
		}
	}

	createNewCharacter(newChar = {}) {
		newChar = this.project.createNewCharacter(newChar);
		this.openEditCharacterDialog(newChar);
		this.reloadContent();
	}

	openEditCharacterDialog(charID) {
		return editCharacter(charID);
	}

	pixelClick(charID, row, col) {
		// conlog(`pixelClick ${charID}, ${row}, ${col}`);
		let char = this.project.getCharacter(charID);
		char.placeholderGlyph.togglePixelAt(row, col);
		
		updatePlaceholderGrids(charID, char);
	}

	pixelHover(event, charID, row, col) {
		// conlog(`pixelHover ${charID}, ${row}, ${col}`);
		event = event || window.event;
		let brush;
		
		if(event.shiftKey) brush = 1;
		else if(event.ctrlKey) brush = 0;
		else return;
		
		let char = this.project.getCharacter(charID);
		char.placeholderGlyph.setPixelAt(row, col, brush);
		
		updatePlaceholderGrids(charID, char);
	}

	letterWidth(charID, increase) {
		let char = this.project.getCharacter(charID);

		if(increase) char.placeholderGlyph.increaseWidth();
		else char.placeholderGlyph.decreaseWidth();

		updatePlaceholderGrids(charID, char);
	}

	copyPlaceholderGlyphData(charID) {
		this.clipboard = this.project.getCharacter(charID).placeholderGlyph;
		showToast('Placeholder Glyph data<br>copied to clipboard')
	}

	pastePlaceholderGlyphData(charID) {
		if(this.clipboard) {
			let char = this.project.getCharacter(charID);
			if(char.placeholderGlyph.width === app.clipboard.width) {
				char.placeholderGlyph.mergeData(this.clipboard.data);
				updatePlaceholderGrids(charID, char);
				showToast('Placeholder Glyph data pasted');
			} else {
				showToast('Error:<br>The two Placeholder Glyphs<br>are different widths');
			}
		}
	}

	showDeleteCharConfirmDialog(charID) {
		openDialog(`
			<h3>Delete ${this.project.getCharacter(charID).name}?&emsp;&emsp;</h3>
			<button onclick="app.deleteCharacter('${charID}');">Delete</button>
			<button class="closeButton">Cancel</button>
		`);
	}

	deleteCharacter(charID) {
		let name = this.project.getCharacter(charID).name;
		this.project.deleteChar(charID);
		this.reloadContent();
		this.closeAllDialogs();
		showToast(`Deleted ${name}`);
	}

	duplicateCharacter(charID, caseVariant) {
		this.closeAllDialogs();
		let newChar = JSON.parse(JSON.stringify(this.project.getCharacter(charID)));
		let newCharID = this.project.createNewCharacter(newChar);
		newChar = this.project.getCharacter(newCharID);
		
		if(caseVariant) {
			if(newChar.caseValue === 'upper') {
				newChar.caseValue = 'lower';
				newChar.name = newChar.name.replace(/Uppercase/i, 'Lowercase');
				newChar.name = newChar.name.replace(/Capital/i, 'Lowercase');
			} else if(newChar.caseValue === 'lower') {
				newChar.caseValue = 'upper';
				newChar.name = newChar.name.replace(/Lowercase/i, 'Uppercase');
				newChar.name = newChar.name.replace(/Small/i, 'Uppercase');
			} else {
				newChar.name += ' copy';
			}

			this.project.caseVariant(charID, newCharID);
		} else {
			newChar.name += ' copy';
		}
		
		this.reloadContent();

		this.openEditCharacterDialog(newCharID);
	}
}

function updatePlaceholderGrids(charID, char) {
	let gridval = document.getElementById('alphabet-grid-'+charID+'-placeholderGlyph');
	if(gridval) gridval.innerHTML = char.placeholderGlyph.makeDisplayChar();

	let editval = document.getElementById('edit-placeholderGlyph');
	if(editval) editval.innerHTML = char.placeholderGlyph.makeEditGrid(10, 1, charID);
}

function clearNavButtonSelectedStates() {
	let navButtons = document.querySelectorAll('#nav button');
	// conlog(navButtons);

	navButtons.forEach(element => {
		element.removeAttribute('selected');
	});
}
