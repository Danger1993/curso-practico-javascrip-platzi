//Codigo del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado){
    return lado * 4;
}
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado(ladoCuadrado) + ' cm');

function areaCuadrado(lado){
    return lado * lado;
}
console.log('El area del cuadrado es: ' + areaCuadrado(ladoCuadrado) + ' cm^2')

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log('Los lados del triangulo miden: '+ ladoTriangulo1 +' cm, ' + ladoTriangulo2 + ' cm, ' + baseTriangulo3 + ' cm');
console.log('La altura del triangulo es: ' + alturaTriangulo + ' cm');

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
console.log('El perimetro del triangulo es: ' + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo3) + ' cm');

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.log('El area del triangulo es: ' + areaTriangulo(baseTriangulo3, alturaTriangulo) + ' cm^2')

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

const radioCirculo = 4;
const PI = Math.PI;


function perimetroCirculo(radio){
    const diametroCirculo = radio * 2;
    return diametroCirculo * PI
}
console.log('El perimetro del Circulo es: ' + perimetroCirculo(radioCirculo) + ' cm');

function areaCirculo(radio){
    return (radio * radio) * PI
}
console.log('El area del circulo es: ' + areaCirculo(radioCirculo) + ' cm^2')

console.groupEnd();


//HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const vale = input.value;

    const perimetro = perimetroCuadrado(vale);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const vale = input.value;

    const area = areaCuadrado(vale);
    alert(area);
}