// //Задача 1

function parseCount(a) {
	let parseResult = Number.parseFloat(a);
	if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
    } 
	return parseResult;
}

function validateCount(a) {
	try {
		return parseCount(a)
	} catch (error) {
		return error;
	}
}

// //Задача 2

class Triangle {
	constructor(a, b, c) {
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		const p = this.perimeter / 2;
		const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

		return Number.parseFloat(result.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}