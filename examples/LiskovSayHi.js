
debugger;

console.log('--- 1 ---')

var root = { 
	extract () {
		console.log('*', this.sayHi());
	}
};

var NextConstructor = function () {
	this.sayHi = function() {
		return 'hi';
	};
};

NextConstructor.prototype = root;
NextConstructor.prototype.constructor = NextConstructor;

var b = new NextConstructor;

console.log('**', b.extract());

// ----

console.log('--- 2 ---')

var root = { 
	extract () {
		console.log('*', this.sayHi());
	}
};

var NextConstructor = function () {};

NextConstructor.prototype = root;
NextConstructor.prototype.constructor = NextConstructor;
NextConstructor.prototype.sayHi = function() {
	return 'hi';
};;

var next = new NextConstructor;

console.log('**', next.extract());
console.log('***', root.sayHi());


// ----

console.log('--- 3 ---')

var root = { 
	extract () {
		console.log('*', this.sayHi());
	}
};

var NextConstructor = function () {};

NextConstructor.prototype.sayHi = function() {
	return 'hi';
};;

var next = new NextConstructor;

Object.setPrototypeOf(NextConstructor.prototype, root);

console.log('**', next.extract());
console.log('***', root.sayHi);

// ----

console.log('--- 4 ---')

var root = { 
	extract (propName) {
		return this[propName]();
	}
};

var NextConstructor = function () {};

NextConstructor.prototype.sayHi = function() {
	return 'hi';
};;

var next = new NextConstructor;

Object.setPrototypeOf(NextConstructor.prototype, root);

console.log(next.extract('sayHi'));

debugger;