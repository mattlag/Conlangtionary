
export function chooserLetterID(keyName, charID) {
	let alphabetList = app.project.getSortedAlphabetArray();
	let currValue = app.project.getCharacter(charID)[keyName];

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