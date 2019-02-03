
export default class PageSettings {
	constructor() {

	}

	load() {
		let md = conlangtionary.project.metadata;

		let content = `
		<h1>Project Settings</h1>

		<label>Constructed Language Name: <input type="text" value="${md.languageName}" onchange="updateSetting('languageName', this.value);"/>
		`;
		return content;
	}
}

window.updateSetting = function(prop, value) {
	conlangtionary.project.metadata[prop] = value;
}