
const MonotonicWrapper = function () {
	console.log('here', this);
	debugger;
};

MonotonicWrapper.prototype.somValue = 123;

class MyClass extends MonotonicWrapper { };

const instance = new MyClass;

debugger;
