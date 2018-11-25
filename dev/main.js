import ChooserIPA from './ChooserIPA.js';
import PageAlphabet from './PageAlphabet.js';
import PageDictionary from './PageDictionary.js';
import PageSettings from './PageSettings.js';
import PageHelp from './PageHelp.js';

function initiate() {
    window.conlangtionary = {
        nav: {
            currentPage: 'welcome',
            pages: {}
        },
        project: {},
        
    };
    window.navigate = navigate;

    navigate('alphabet');
}

function navigate(page) {
    let target = document.getElementById('app');
    let pages = window.conlangtionary.nav.pages;

    clearNavButtonSelectedStates();

    if(page === 'alphabet') {
        document.getElementById('navButtonAlphabet').setAttribute('selected', 'true');
        console.log(`loading alphabet`);
        if(!pages.alphabet) {
            pages.alphabet = new PageAlphabet();
        }
        target.innerHTML = pages.alphabet.load();
    }

    if(page === 'dictionary') {
        document.getElementById('navButtonDictionary').setAttribute('selected', 'true');
        console.log(`loading dictionary`);
        if(!pages.dictionary) {
            pages.dictionary = new PageDictionary();
        }
        target.innerHTML = pages.dictionary.load();
    }

    if(page === 'settings') {
        document.getElementById('navButtonSettings').setAttribute('selected', 'true');
        console.log(`loading settings`);
        if(!pages.settings) {
            pages.settings = new PageSettings();
        }
        target.innerHTML = pages.settings.load();
    }

    if(page === 'help') {
        document.getElementById('navButtonHelp').setAttribute('selected', 'true');
        console.log(`loading help`);
        if(!pages.help) {
            pages.help = new PageHelp();
        }
        target.innerHTML = pages.help.load();
    }
}

function clearNavButtonSelectedStates() {
    let navButtons = document.querySelectorAll('#nav button');
    console.log(navButtons);

    navButtons.forEach(element => {
        element.removeAttribute('selected');
    });
}

initiate();