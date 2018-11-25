
export default class PageSettings {
    constructor() {

    }

    load() {
        let content = '<h1>Project Settings</h1>';
        content += `<label>Constructed Language Name: <input type="text" value="Shjo'onti"></input>`;
        return content;
    }
}