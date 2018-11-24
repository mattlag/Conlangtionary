import ChooserIPA from './ChooserIPA.js';

function navigate(page) {
    let target = document.getElementById('app');
    let chooser = new ChooserIPA();
    target.innerHTML = chooser.load();
}

navigate();