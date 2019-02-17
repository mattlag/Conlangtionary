import { settingsDescriptions, settingsNames } from "../objects/Project.js";
import { nbsp } from "../common.js";
import { showToast } from "../dialogs/Dialog.js";

export default class PageSettings {
	constructor() {

	}

	load() {
		let project = app.project;

		let content = `
		<h1>Project Settings</h1>
		<div class="settingsGrid">

			<label class="name">${nbsp(`${settingsNames.languageName}:`)}</label>
			<span class="value">
				<input type="text" value="${project.settings.languageName}" onchange="app.project.updateSetting('languageName', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.languageName}</span>

			<label class="name">${nbsp(`${settingsNames.author}:`)}</label>
			<span class="value">
				<input type="text" value="${project.settings.author}" onchange="app.project.updateSetting('author', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.author}</span>
		
			<span class="name">
				<br><br>
				<h3>Alphabet</h3>
			</span>

			<label class="name">${nbsp(`${settingsNames.hasCases}:`)}</label>
			<span class="value">
				<input type="checkbox" ${project.settings.hasCases? 'checked' : ''} onchange="app.project.updateSetting('hasCases', !!this.checked);"/>
			</span>
			<span class="description">${settingsDescriptions.hasCases}</span>

			<label class="name">${nbsp(`${settingsNames.placeholderGlyphHeight}:`)}</label>
			<span class="value">
				<input type="number" value="${project.settings.placeholderGlyphHeight}" onchange="app.project.updateSetting('placeholderGlyphHeight', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.placeholderGlyphHeight}</span>

			<label class="name">${nbsp(`${settingsNames.defaultPlaceholderGlyphWidth}:`)}</label>
			<span class="value">
				<input type="number" value="${project.settings.defaultPlaceholderGlyphWidth}" onchange="app.project.updateSetting('defaultPlaceholderGlyphWidth', this.value);"/>
			</span>
			<span class="description">${settingsDescriptions.defaultPlaceholderGlyphWidth}</span>

		</div>
		`;
		return content;
	}
}
