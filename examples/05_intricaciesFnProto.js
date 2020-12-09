'use strict';

const myFn = function () { };

const myFnProto = Object.getPrototypeOf(myFn);

console.log(Object
	.getPrototypeOf(myFn) ===
	Function.prototype);

console.log(Object
	.getPrototypeOf(Function) ===
	Function.prototype);

console.log(Object
	.getPrototypeOf(Function.prototype) ===
	Object.prototype);

debugger;

const Constructible = new Function();
Object.defineProperty(Constructible.prototype.constructor, 'name', {
	get () {
		return 'Constructible';
	}
});

Object.defineProperty(Constructible.prototype.constructor, Symbol.toStringTag, {
	get () {
		return 'Constructible';
	}
});

const instance = new Constructible;

console.log(instance);

console.log('\n --- construct proxy --- \n');
const Cstr = new Proxy(myFn, {
	get (target, propName, receiver) {
		console.log('.get: ', propName);
		return Reflect.get(target, propName, receiver);
	},
	construct (target, argumentsList, newTarget) {
		console.log('.construct invocation');
		return Reflect.construct(target, argumentsList, newTarget);
	}
});
new Cstr;

console.log('\n');
debugger;