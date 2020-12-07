const ogp = Object.getPrototypeOf;
const osp = Object.setPrototypeOf;

const supervise = (instance, args) => {
	const seek4name = args.callee.name;
	let current = instance;
	do {
		if (current === null) {
			break;
		}
		if (current.constructor.name === seek4name) {
			break;
		}
		current = ogp(current);
		continue;
	} while (true);
	const Super = ogp(current.constructor);
	if (Super instanceof Function) {
		Super.call(instance, ...args);
	}
};

const Base = function () {
	supervise(this, arguments);
	this.base = true;
	this.super = 0;
	console.log(5, arguments.callee.name);
};

const NextFn = function () {
	console.log(4, arguments.callee.name);
	supervise(this, arguments);
	this.super = 1;
	this.next = true;
};

const ExtendedFn = function () {
	'use strict';
	console.log(3, arguments.callee.name);
	supervise(this, arguments);
	this.super = 2;
	this.extended = true;
};

Reflect.setPrototypeOf(NextFn, Base);
Reflect.setPrototypeOf(NextFn.prototype, Base.prototype);
Reflect.setPrototypeOf(ExtendedFn, NextFn);
Reflect.setPrototypeOf(ExtendedFn.prototype, NextFn.prototype);

class ForExtending extends ExtendedFn {
	// class ForExtending {
	forExtendingProto = true;
	constructor() {
		// arguments.callee disabled 4 strict mode
		console.log(2, new.target.name);
		super();
		console.log(' ↓ this.forExtendingProto : ', this.forExtendingProto);
		console.log(' ↓ this.inTheMiddleProto  : ', this.inTheMiddleProto);
		console.log(' ↓ this.someProto         : ', this.someProto);
		this.super = 2;
		this.forExtending = true;
	}
};

class InTheMiddle extends ForExtending {
	inTheMiddleProto = true;
	constructor() {
		// arguments.callee disabled 4 strict mode
		console.log(1, new.target.name);
		super();
		this.super = 4;
		this.inTheMiddle = true;
	}
};

class Some extends InTheMiddle {
	someProto = true;
	constructor() {
		// this keyword is undefined here
		// and we are able to see it
		// only using debugger;
		debugger;
		// arguments.callee disabled 4 strict mode
		console.log(0, new.target.name);
		super();
		this.super = 5;
		this.some = true;
	}
}

const some = new Some;

console.log('some.base  : ', some.base);
console.log('some.super : ', some.super);

console.log('ForExtending → InTheMiddle', Reflect.getPrototypeOf(InTheMiddle) === ForExtending); // true
console.log('ForExtending → InTheMiddle', Reflect.getPrototypeOf(InTheMiddle.prototype) === ForExtending.prototype); // true
console.log('InTheMiddle → Some', Reflect.getPrototypeOf(Some) === InTheMiddle); // true
console.log('InTheMiddle → Some', Reflect.getPrototypeOf(Some.prototype) === InTheMiddle.prototype); // true
