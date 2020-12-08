'use strict';

const MAX_NUM = 10000;

global.m = [];

global.start = Date.now();

global.current = {
	name: 'root'
};

const review = () => {
	console.log('finished', global.m.length, (Date.now() - global.start) / 1000);
	debugger;
};

const makeNextEl = function (pointer) {
	const name = `idx_${ global.m.length }`;
	const el = {
		name,
		[name]: name,
		parent: pointer,
		get self () {
			return el;
		}
	};
	Object.setPrototypeOf(el, pointer);
	global.current = el;
	global.m.push(el);
	if (global.m.length < MAX_NUM) {
		console.log(global.m.length, name, (Date.now() - global.start) / 1000);
		// setTimeout(() => {
			makeNextEl(el);
		// }, 0);
		return;
	}
	review();
};

makeNextEl(global.current);
