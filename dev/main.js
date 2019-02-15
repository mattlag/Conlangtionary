import PageWelcome from './pages/Welcome.js';
import PageAlphabet from './pages/Alphabet.js';
import PageDictionary from './pages/Dictionary.js';
import PageSettings from './pages/Settings.js';
import PageHelp from './pages/Help.js';
import Project, { sampleProject } from './objects/Project.js';
import { editCharacter } from './dialogs/editCharacter.js';
import { saveFile } from './common.js';
import { chooserIPA } from './dialogs/ChooserIPA.js';

function initiate() {
	window.conlangtionary = {
		nav: {
			currentPage: 'welcome',
			pages: {}
		},
		charIDPrefix: 'char',
	};

	window.conlangtionary.project = new Project(sampleProject);
	window.editCharacter = editCharacter;
	window.chooserIPA = chooserIPA;
	document.querySelector('.saveButton').onclick = saveProject;

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

function saveProject() {
	let d = new Date();
	let yr = d.getFullYear();
	let mo = d.getMonth()+1;
	let day = d.getDate();
	let hr = d.getHours();
	let min = (d.getMinutes()<10? '0' : '') + d.getMinutes();
	let sec = (d.getSeconds()<10? '0' : '') + d.getSeconds();

	let suffix = (''+yr+'.'+mo+'.'+day+'-'+hr+'.'+min+'.'+sec);

	let data = JSON.stringify(conlangtionary.project);

	saveFile(`${conlangtionary.project.settings.languageName} - conlangtionary - ${suffix}.txt`, data);
}

initiate();