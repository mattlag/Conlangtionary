import { settingsDescriptions } from "./Project.js";

export default class PageSettings {
	constructor() {

	}

	load() {
		let project = conlangtionary.project;

		let content = `
		<h1>Project Settings</h1>
		<div class="settingsGrid">

			<label class="name">Constructed&nbsp;Language&nbsp;Name:</label>
			<span class="value">
				<input type="text" value="${project.settings.languageName}" onchange="updateMetadata('languageName', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.languageName}</span>

			<label class="name">Author:</label>
			<span class="value">
				<input type="text" value="${project.settings.author}" onchange="updateMetadata('author', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.author}</span>

			<label class="name">Case&nbsp;Variants:</label>
			<span class="value">
				<input type="checkbox" ${project.settings.caseVariants? 'checked' : ''} onchange="updateSettings('caseVariants', !!this.checked);"/>
			</span>            
			<span class="description">${settingsDescriptions.caseVariants}</span>

		</div>
		`;
		return content;
	}
}

window.updateSettings = function(prop, value) {
	console.log(`setting ${prop} to ${value}`);
	conlangtionary.project.settings[prop] = value;
};