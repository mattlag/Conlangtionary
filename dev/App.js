import Project, { sampleProject } from './objects/Project.js';
import PageWelcome from './pages/Welcome.js';
import PageAlphabet from './pages/Alphabet.js';
import PageDictionary from './pages/Dictionary.js';
import PageSettings from './pages/Settings.js';
import PageHelp from './pages/Help.js';
import {editCharacter} from './dialogs/editCharacter.js';
import { openDialog, showToast } from './dialogs/Dialog.js';

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

	openEditCharacterDialog(charID) {
		return editCharacter(charID);
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
}

function clearNavButtonSelectedStates() {
	let navButtons = document.querySelectorAll('#nav button');
	// conlog(navButtons);

	navButtons.forEach(element => {
		element.removeAttribute('selected');
	});
}
