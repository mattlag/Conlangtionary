
export default class PageAlphabet {
	constructor() {

	}

	load() {
		let content = '<h1>Alphabet</h1>';
		content += '<button class="command">Add Letter</button>';
		content += '<button class="command" disabled>Remove Letter</button>';
		return content;
	}
}