const salariosCub = cuba.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosCubOrdenados = salariosCub.sort(
    function (a, b){
        return a - b;
    }
);

const promedio = calcularMediaAritmetica(salariosCubOrdenados);
const mediana = calcularMediana(salariosCubOrdenados);
const moda = calcularModa(salariosCubOrdenados);

//Mediana del top 10%

const salariosCubTop10 = salariosCubOrdenados.splice(
    (salariosCubOrdenados.length * (100 - 10) / 100),
    (salariosCubOrdenados.length - (salariosCubOrdenados.length * (100 - 10) / 100))
);