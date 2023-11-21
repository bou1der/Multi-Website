let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));

let average = (num1 + num2 + num3) / 3;
alert(`Среднее арифметическое: ${average.toFixed(2)}`);
