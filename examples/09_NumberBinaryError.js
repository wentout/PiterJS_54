
debugger;

const a = new Number(100);

a.subtract = function (b) {
	return this.valueOf() - b;
};

a[Symbol.toPrimitive] = () => {
	throw new Error('418: use subtract !');
}

console.log(a.subtract(10));    // 90

try {
	console.log(a - 10);            // Error
} catch (error) {
	debugger;
	console.error(error);
}


// and, for example of eslint
const eslintrc = {
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector: 'BinaryExpression[operator=\'-\']',
				message: 'syntax protocol error: +'
			},
			{
				selector: 'BinaryExpression[operator=\'>\']',
				message: 'syntax protocol error: >'
			}],
	}
}

debugger;