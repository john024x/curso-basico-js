//cuadrado
const lado = 5;
const perimetro = lado + lado + lado + lado;
const area = Math.pow(lado,2);
console.group("Cuadrado");
console.log(`Los lados del cuadrado miden ${lado}cm su perimetro es ${perimetro}cm y su area es ${area}cm^2`);
console.groupEnd();
//triangulo
const lado1 = 5;
const lado2 = 5;
const lado3 = 5;
const altura = 5.5;
const perimetroTri = lado + lado + lado
const areaTri = (lado3 * altura) / 2
console.group("Triangulo");
console.log(`Los lados del triangulo miden ${lado}cm su perimetro es ${perimetroTri}cm y su area es ${areaTri}cm^2`);
console.groupEnd();
//Circulo
const radio = 5;
const perimetroCir = Math.PI * (radio*2);
const areaCir = Math.PI * (Math.pow(radio,2))
console.group("Circulo");
console.log(`El radio del circulo mide ${radio}cm su perimetro es ${perimetroCir}cm y su area es ${areaCir}cm^2`);
console.groupEnd();
