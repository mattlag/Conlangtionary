import App from './App.js';

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