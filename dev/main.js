import ChooserIPA from './ChooserIPA.js';
import PageAlphabet from './PageAlphabet.js';
import PageDictionary from './PageDictionary.js';
import PageSettings from './PageSettings.js';
import PageHelp from './PageHelp.js';
import Project, { latinProject } from './Project.js';
import PageWelcome from './pageWelcome.js';

function initiate() {
	window.conlangtionary = {
		nav: {
			currentPage: 'welcome',
			pages: {}
		},
		letterPrefix: 'letter',
	};

	window.conlangtionary.project = new Project(latinProject);

	window.navigate = navigate;
	navigate('alphabet');
}

function navigate(page) {
	let target = document.getElementById('app');
	let pages = window.conlangtionary.nav.pages;
	
	document.getElementById('langNameTitle').innerHTML = conlangtionary.project.settings.languageName;
	
	clearNavButtonSelectedStates();

	if(page === 'welcome') {
		document.getElementById('navButtonWelcome').setAttribute('selected', 'true');
		console.log(`loading page: welcome`);
		if(!pages.welcome) {
			pages.welcome = new PageWelcome();
		}
		target.innerHTML = pages.welcome.load();
	}

	if(page === 'alphabet') {
		document.getElementById('navButtonAlphabet').setAttribute('selected', 'true');
		console.log(`loading page: alphabet`);
		if(!pages.alphabet) {
			pages.alphabet = new PageAlphabet();
		}
		target.innerHTML = pages.alphabet.load();
	}

	if(page === 'dictionary') {
		document.getElementById('navButtonDictionary').setAttribute('selected', 'true');
		console.log(`loading page: dictionary`);
		if(!pages.dictionary) {
			pages.dictionary = new PageDictionary();
		}
		target.innerHTML = pages.dictionary.load();
	}

	if(page === 'settings') {
		document.getElementById('navButtonSettings').setAttribute('selected', 'true');
		console.log(`loading page: settings`);
		if(!pages.settings) {
			pages.settings = new PageSettings();
		}
		target.innerHTML = pages.settings.load();
	}

	if(page === 'help') {
		document.getElementById('navButtonHelp').setAttribute('selected', 'true');
		console.log(`loading page: help`);
		if(!pages.help) {
			pages.help = new PageHelp();
		}
		target.innerHTML = pages.help.load();
	}

	console.log(`page load complete`);
}

function clearNavButtonSelectedStates() {
	let navButtons = document.querySelectorAll('#nav button');
	// console.log(navButtons);

	navButtons.forEach(element => {
		element.removeAttribute('selected');
	});
}

export function openDialog(content) {
	document.getElementById('dialogContent').innerHTML = makeCloseButton('closeDialog();') + content;
	document.getElementById('dialogControl').style.display = 'grid';
	window.setTimeout(function () {
		document.getElementById('dialogControl').style.opacity = '1';
		document.getElementById('dialogContent').style.opacity = '1';
	}, 10);
}

window.nothing = function(event) {
	// console.log(event);
	event.stopPropagation();
}

function makeCloseButton(func) {
	return `<div class="closeButtonWrapper"><button onclick="${func}" class="closeButton" title="Close">⨉</button></div>`;
}

window.closeDialog = function() {
	document.getElementById('dialogContent').style.opacity = '0';

	window.setTimeout(function () {
		document.getElementById('dialogControl').style.opacity = '0';

		window.setTimeout(function () {
			document.getElementById('dialogControl').style.display = 'none';
			document.getElementById('dialogContent').innerHTML = '';
		}, 150);

	}, 350);
};

initiate();