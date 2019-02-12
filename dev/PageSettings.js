import { settingsDescriptions } from "./Project.js";
import { nbsp } from "./main.js";

export default class PageSettings {
	constructor() {

	}

	load() {
		let project = conlangtionary.project;

		let content = `
		<h1>Project Settings</h1>
		<div class="settingsGrid">

			<label class="name">${nbsp('Constructed Language Name:')}</label>
			<span class="value">
				<input type="text" value="${project.settings.languageName}" onchange="updateMetadata('languageName', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.languageName}</span>

			<label class="name">${nbsp('Author:')}</label>
			<span class="value">
				<input type="text" value="${project.settings.author}" onchange="updateMetadata('author', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.author}</span>
		
			<span class="name">
				<br><br>
				<h3>Alphabet</h3>
			</span>

			<label class="name">${nbsp('Placeholder glyph height:')}</label>
			<span class="value">
				<input type="number" value="${project.settings.placeholderGlyphHeight}" onchange="updateSettings('placeholderGlyphHeight', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.placeholderGlyphHeight}</span>

			<label class="name">${nbsp('Case Variants:')}</label>
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