

export function openDialog(content) {
	let dialogID = getNewDialogID();
	
	let closeDialogControl = function() {
		let dialog = document.getElementById(dialogID);
		dialog.style.opacity = '0';
		window.setTimeout(function () {
			dialog.parentElement.removeChild(dialog);
		}, 100);
	};

	let dialogContent = document.createElement('div');
	dialogContent.setAttribute('class', 'dialogContent');
	dialogContent.setAttribute('onclick', function(event) {
		event.stopPropagation();
	});

	let closeButton = document.createElement('button');
	closeButton.setAttribute('class', 'closeButton');
	closeButton.setAttribute('title', 'Close');
	closeButton.innerHTML = '⨉';
	closeButton.onclick = closeDialogControl;

	let closeDialogWrapper = document.createElement('div');
	closeDialogWrapper.setAttribute('class', 'closeButtonWrapper');
	closeDialogWrapper.appendChild(closeButton);

	let contentWrapper = document.createElement('div');
	contentWrapper.innerHTML = content;

	dialogContent.appendChild(closeDialogWrapper);
	dialogContent.appendChild(contentWrapper);

	let dialogControl = document.createElement('div');
	dialogControl.setAttribute('class', 'dialogControl');
	dialogControl.setAttribute('id', dialogID);
	dialogControl.setAttribute('style', 'opacity: 0');
	dialogControl.onclick = closeDialogControl;

	dialogControl.appendChild(dialogContent);

	document.body.appendChild(dialogControl);
	window.setTimeout(function () {
		dialogControl.setAttribute('style', 'opacity: 1; display: grid;');
	}, 100);
}

function getNewDialogID() {
	let suffix = 1;
	
	while(true) {
		if(!document.getElementById('dialog-'+suffix)) return 'dialog-'+suffix;
		suffix++;
	}
}

// window.closeDialog = function() {
// 	document.getElementById('dialogContent').style.opacity = '0';

// 	window.setTimeout(function () {
// 		document.getElementById('dialogControl').style.opacity = '0';

// 		window.setTimeout(function () {
// 			document.getElementById('dialogControl').style.display = 'none';
// 			document.getElementById('dialogContent').innerHTML = '';
// 		}, 150);

// 	}, 350);
// };