"use strict";

function checkSyntax(str) {
	// обработка строки - оставляем только скобки
	str = str.replace(/[^()\[\]\{\}\<\>]/g, "");

	let brackets = {
		"[": "]",
		"{": "}",
		"(": ")",
		"<": ">",
	};

	let stack = [];

	for (let i = 0; i < str.length; i++) {
		// если открывающая скобка
		if (brackets[str[i]]) {
			// добавляем обратную скобку
			stack.push(brackets[str[i]]);
		} else {
			// если текущая скобка закрывающая и если мы находим ее в конце стэка - удаляем ее из стека
			if (str[i] === stack[stack.length - 1]) {
				stack.pop();
			} else {
				stack.push(str[i]);
			}
		}
	}

	if (stack.length === 0) {
		return 0;
	}

	return 1;
}

console.log(checkSyntax("---(++++)----"));
console.log(checkSyntax(""));
console.log(checkSyntax("before ( middle []) after "));
console.log(checkSyntax(") ("));
console.log(checkSyntax("} {"));
console.log(checkSyntax("<(   >)"));
console.log(checkSyntax("([ < > ( ) ] < > )"));
console.log(checkSyntax("   (      [)"));
