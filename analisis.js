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