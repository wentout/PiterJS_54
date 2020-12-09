
const SingletonWrapper = function () { };

SingletonWrapper.prototype = Object.create(process);

SingletonWrapper.prototype.constructor = SingletonWrapper;

const instance = new SingletonWrapper;

debugger;
