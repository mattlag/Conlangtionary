import App from './App.js';
import PlaceholderGlyph, { sampleGlyph12by20, sampleGlyph6by10 } from './objects/PlaceholderGlyph.js';

window.conlog = function(msg) {
	if(app) {
		if(app.devMode)	console.log(msg);
	} else {
		console.log(msg);
	}
};

export var app = new App();
window.app = app;

app.navigate('alphabet');

conlog('original:\n' + sampleGlyph6by10);
conlog('parseInt:\n' + parseInt(sampleGlyph6by10.replace(/\s+/gi, ''), 2));
conlog('indexOf:\n' + sampleGlyph6by10.replace(/\s+/gi, '').indexOf('1'));
let compressed = parseInt(sampleGlyph6by10.replace(/\s+/gi, ''), 2).toString(36);
conlog('compressed:\n' + compressed);
conlog('parseInt:\n'+parseInt(compressed, 36));
conlog('data:\n'+parseInt(compressed, 36).toString(2));