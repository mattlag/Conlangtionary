import PageWelcome from './pages/Welcome.js';
import PageAlphabet from './pages/Alphabet.js';
import PageDictionary from './pages/Dictionary.js';
import PageSettings from './pages/Settings.js';
import PageHelp from './pages/Help.js';
import Project, { sampleProject } from './objects/Project.js';

export default class App {
	constructor() {
		conlog('App - start');
		this.devMode =true;
		this.nav = {
			currentPage: 'welcome',
			pages: {}
		};
		this.project = new Project(sampleProject);
		window.conlog = conlog;
		conlog('App - end');
	}

	navigate(page) {
		let target = document.getElementById('content');
		let pages = this.nav.pages;
		
		document.getElementById('langNameTitle').innerHTML = this.project.settings.languageName;
		
		clearNavButtonSelectedStates();

		if(page === 'welcome') {
			document.getElementById('navButtonWelcome').setAttribute('selected', 'true');
			conlog(`loading page: welcome`);
			if(!pages.welcome) {
				pages.welcome = new PageWelcome(this);
			}
			target.innerHTML = pages.welcome.load();
		}

		if(page === 'alphabet') {
			document.getElementById('navButtonAlphabet').setAttribute('selected', 'true');
			conlog(`loading page: alphabet`);
			if(!pages.alphabet) {
				pages.alphabet = new PageAlphabet(this);
			}
			target.innerHTML = pages.alphabet.load();
		}

		if(page === 'dictionary') {
			document.getElementById('navButtonDictionary').setAttribute('selected', 'true');
			conlog(`loading page: dictionary`);
			if(!pages.dictionary) {
				pages.dictionary = new PageDictionary(this);
			}
			target.innerHTML = pages.dictionary.load();
		}

		if(page === 'settings') {
			document.getElementById('navButtonSettings').setAttribute('selected', 'true');
			conlog(`loading page: settings`);
			if(!pages.settings) {
				pages.settings = new PageSettings(this);
			}
			target.innerHTML = pages.settings.load();
		}

		if(page === 'help') {
			document.getElementById('navButtonHelp').setAttribute('selected', 'true');
			conlog(`loading page: help`);
			if(!pages.help) {
				pages.help = new PageHelp(this);
			}
			target.innerHTML = pages.help.load();
		}

		conlog(`page load complete`);
	}
}

function clearNavButtonSelectedStates() {
	let navButtons = document.querySelectorAll('#nav button');
	// conlog(navButtons);

	navButtons.forEach(element => {
		element.removeAttribute('selected');
	});
}
