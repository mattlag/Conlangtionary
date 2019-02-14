import { makeSortedAlphabetArray } from "../pages/Alphabet.js";

export function chooserLetterID(keyName, charID) {
	let alphabetList = makeSortedAlphabetArray();
	let currValue = conlangtionary.project.getCharacter(charID)[keyName];

	return `
		<select onchange="updateCharacter('${charID}', '${keyName}', this.value);">
			<option value=""${currValue? '' : ' selected'}></option>
			${
				alphabetList.map(char => `
					<option value="${char.id}"${currValue === char.id? ' selected' : ''}>
						${char.name} - ${char.id}
					</option>
				`).join('')
			}
		</select>
	`;
}