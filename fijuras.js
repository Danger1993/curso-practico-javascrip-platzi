//Codigo del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + ' cm^2')

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log('Los lados del triangulo miden: '+ ladoTriangulo1 +' cm, ' + ladoTriangulo2 + ' cm, ' + baseTriangulo3 + ' cm');
console.log('La altura del triangulo es: ' + alturaTriangulo + ' cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log('El perimetro del triangulo es: ' + perimetroTriangulo + ' cm');

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log('El area del triangulo es: ' + areaTriangulo + ' cm^2')

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

const radioCirculo = 4;
const PI = Math.PI;
const diametroCirculo = radioCirculo * 2;

const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetro del Circulo es: ' + perimetroCirculo + ' cm');

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El area del circulo es: ' + areaCirculo + ' cm^2')

console.groupEnd();
