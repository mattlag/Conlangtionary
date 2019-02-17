
// returns a full new copy of any object
export function clone(cobj){
	var newObj = (cobj instanceof Array) ? [] : {};
	for (var i in cobj) {
		if (cobj[i] && typeof cobj[i] === 'object') {
			newObj[i] = clone(cobj[i]);
		} else newObj[i] = cobj[i];
	}
	return newObj;
}

// better rounding than Math.round
export function round(num, dec){
	if(!num) return 0;
	dec = dec || 0;
	return Number(Math.round(num+'e'+dec)+'e-'+dec) || 0;
}

// a function for filtering out duplicates in arrays
export function duplicates(v, i, a) { return a.indexOf(v) === i; }

// removes illegal file name chars
export function strSan(val){
	return val.replace(/[<>'"\\]/g,"");
}

// replaces spaces with non-breaking spaces
export function nbsp(text) {
	text = text.replace(/\s+/gi, '&nbsp;');
	return text;
}

// removes beginning and trailing whitespace, and any breaking or tab chars
export function trim(text) {
	try {
		text = text.replace(/^\s+|\s+$/g, '');
		return text.replace(/(\r\n|\n|\r|\t)/gm, '');
	} catch(e) { return ''; }
}

// returns true for 0 and false
export function isval(val){
	if(val === 0) return true;
	else if (val === false) return true;
	else if(val === null || val === undefined) return false;
	else if ( typeof val === 'object' && Object.keys(val).length === 0 ) return false;
	else return !!val;
}

export function reqAniFrame(fun) {
	if(_UI.popout){
		if(_UI.popout.requestAnimationFrame) _UI.popout.requestAnimationFrame(fun);
		else {
			console.warn('no requestAnimationFrame');
			fun();
		}
	} else {
		if(window.requestAnimationFrame) window.requestAnimationFrame(fun);
		else {
			console.warn('no requestAnimationFrame');
			fun();
		}
	}
}
