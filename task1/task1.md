# Решение задачи 1

Реализовать функцию `checkSyntax(string)`, проверяющую на синтаксическую верность последовательность скобок.
Задача не сводится к простой проверке сбалансированности скобок.
Нужно еще учитывать их последовательность (вложенность).

Решение довольно простое:
Для начала - отформатируем входную строку. Уберем все, кроме нужных нам скобок.
Суть алгоритма заключается в добавлении последней незакрытой скобки в стек.
А именно:
1. Проверяем какая скобка текущая
2. Если открывающая - добавляем закрываюую в стек
3. Если закрывающая - проверяем, эта скобка на вершине стека?
    1. если на вершине - удаляем ее из стека
    2. если не на вершине - добавляем в стек

Если в конце стек окажется пустым - последовательность правильная.

```js
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
```