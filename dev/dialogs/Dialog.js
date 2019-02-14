

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
	dialogContent.setAttribute('onclick', 'event.stopPropagation();');

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

export function showToast(msg, dur, fn) {
	// debug('\n showToast - START');
	var step = -1;
	var stepmax = 20;
	var timestep = 10;
	var divisor = 5;
	var msgdiv = getEditDocument().getElementById('toast');
	var durration = dur || 3000;
	msgdiv.innerHTML = msg || 'Howdy!';

	// debug('\t Typeof fn: ' + typeof fn);
	// console.log(fn);

	if(fn && typeof fn === 'function') {
		// debug('\t CALLING FUNCTION NOW');
		setTimeout(fn, 100);
	}

	if(_UI.toasttimeout){
		msgdiv.innerHTML = msg;
		appearFinish();
		return;
	}

	var currtop = -50;
	var finaltop = 15;
	var curropacity = 0;
	var finalopacity = 1;

	function appearFinish() {
		// debug('\t appearFinish');
		currtop = finaltop;
		curropacity = finalopacity;
		step = stepmax;

		msgdiv.style.marginTop = (finaltop + 'px');
		msgdiv.style.opacity = finalopacity;

		setToastTimeout(disappearStep, durration);

	}

	function appearStep() {
		// debug('\t appearStep ' + step);

		if(step < 0){
			msgdiv.style.display = 'block';
			msgdiv.style.marginTop = '-50px;';
			msgdiv.style.opacity = '0.0';
			msgdiv.style.borderBottomWidth = '0px';

			step++;

			setToastTimeout(appearStep, timestep);

		} else if (step < stepmax){
			step++;
			currtop = currtop + ((finaltop - currtop) / divisor);
			curropacity = curropacity + ((finalopacity - curropacity) / divisor);

			msgdiv.style.marginTop = (currtop + 'px');
			msgdiv.style.opacity = curropacity;

			setToastTimeout(appearStep, timestep);

		} else {
			appearFinish();
		}
	}

	function disappearStep() {
		// debug('\t appearStep ' + step);
		if(step < 0){
			msgdiv.style.display = 'none';
			msgdiv.style.marginTop = '-50px;';
			msgdiv.style.opacity = '0.0';
			msgdiv.innerHTML = '0_o';
			if(_UI.toasttimeout) {
				clearTimeout(_UI.toasttimeout);
				_UI.toasttimeout = false;
			}

		} else {
			step--;
			currtop = currtop - (currtop / divisor);
			curropacity = curropacity - (curropacity / divisor);

			msgdiv.style.marginTop = (currtop + 'px');
			msgdiv.style.opacity = curropacity;

			setToastTimeout(disappearStep, timestep);
		}
	}

	setToastTimeout(appearStep, 1);
	// debug(' showToast - END\n');
}

function setToastTimeout(fn, dur) {
	if(_UI.toasttimeout) clearTimeout(_UI.toasttimeout);
	_UI.toasttimeout = setTimeout(fn, dur);
}
