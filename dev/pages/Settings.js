import { settingsDescriptions, settingsNames } from "../objects/Project.js";
import { nbsp } from "../common.js";
import { showToast } from "../dialogs/Dialog.js";

export default class PageSettings {
	constructor() {

	}

	load() {
		let project = conlangtionary.project;

		let content = `
		<h1>Project Settings</h1>
		<div class="settingsGrid">

			<label class="name">${nbsp(`${settingsNames.languageName}:`)}</label>
			<span class="value">
				<input type="text" value="${project.settings.languageName}" onchange="updateSettings('languageName', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.languageName}</span>

			<label class="name">${nbsp(`${settingsNames.author}:`)}</label>
			<span class="value">
				<input type="text" value="${project.settings.author}" onchange="updateSettings('author', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.author}</span>
		
			<span class="name">
				<br><br>
				<h3>Alphabet</h3>
			</span>

			<label class="name">${nbsp(`${settingsNames.hasCases}:`)}</label>
			<span class="value">
				<input type="checkbox" ${project.settings.hasCases? 'checked' : ''} onchange="updateSettings('hasCases', !!this.checked);"/>
			</span>
			<span class="description">${settingsDescriptions.hasCases}</span>

			<label class="name">${nbsp(`${settingsNames.placeholderGlyphHeight}:`)}</label>
			<span class="value">
				<input type="number" value="${project.settings.placeholderGlyphHeight}" onchange="updateSettings('placeholderGlyphHeight', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.placeholderGlyphHeight}</span>

			<label class="name">${nbsp(`${settingsNames.defaultPlaceholderGlyphWidth}:`)}</label>
			<span class="value">
				<input type="number" value="${project.settings.defaultPlaceholderGlyphWidth}" onchange="updateSettings('defaultPlaceholderGlyphWidth', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.defaultPlaceholderGlyphWidth}</span>

		</div>
		`;
		return content;
	}
}

window.updateSettings = function(prop, value) {
	conlog(`setting ${prop} to ${typeof value} ${value}`);
	conlangtionary.project.settings[prop] = value;
	showToast(`Updated ${settingsNames[prop]}`);
};