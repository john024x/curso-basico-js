//cuadrado

//triangulo

//Circulo

function circulo(lado){
    let perimetro = lado + lado + lado + lado;
    let  area = Math.pow(lado,2);
    return console.log(`Los lados del cuadrado miden ${lado}cm su perimetro es ${perimetro}cm y su area es ${area}cm^2`);
}
function triangulo(lado1,lado2,lado3,altura){
    let perimetroTri = lado1 + lado2 + lado3
    let areaTri = (lado3 * altura) / 2
    return console.log(`Los lados del triangulo miden ${lado1}cm su perimetro es ${perimetroTri}cm y su area es ${areaTri}cm^2`);
}
function circulo(radio){
    let perimetroCir = Math.PI * (radio*2);
    let areaCir = Math.PI * (Math.pow(radio,2))
    return console.log(`El radio del circulo mide ${radio}cm su perimetro es ${perimetroCir}cm y su area es ${areaCir}cm^2`);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    let value = input.value;
    let perimetro = value*4;
    alert(perimetro)
}

function calcularAreaCuadradoa(){
    const input = document.getElementById('InputCuadrado');
    let value = input.value;
    let area = Math.pow(value, 2);
    alert(area);
}