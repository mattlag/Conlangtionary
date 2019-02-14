

export function openDialog(content) {
	let dialogID = getNewDialogID();

	let dialogHTML = `
		<div class="dialogContent" onclick="event.stopPropagation();">
			<div style="width: 100%; text-align: right;">
				<button 
					class="closeButton" 
					style="
						border-radius: 0 0 0 4px !important;
						width: 2em; height: 2em;
						position: relative;
						top: -1px; left: 29px;
					"
				>⨉</button>
			</div>
			${content}
		</div>
	`;
	
	let dialogElement = document.createElement('div');
	dialogElement.setAttribute('class', 'dialog');
	dialogElement.setAttribute('id', dialogID);
	dialogElement.innerHTML = dialogHTML;

	let closeDialog = function() {
		let dialog = document.getElementById(dialogID);
		dialog.style.opacity = '0';
		window.setTimeout(function () {
			dialog.parentElement.removeChild(dialog);
		}, 100);
	};

	// console.log(dialogElement);

	document.body.appendChild(dialogElement);
	
	dialogElement.querySelector('.closeButton').onclick = closeDialog;
	dialogElement.onclick = closeDialog;
	
	window.setTimeout(function () {
		dialogElement.setAttribute('style', 'opacity: 1; display: grid;');
		window.setTimeout(function(){
			dialogElement.querySelector('.dialogContent').setAttribute('style', 'opacity: 1; display: block;');
		}, 110);
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
