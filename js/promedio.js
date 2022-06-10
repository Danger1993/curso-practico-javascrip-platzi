function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){

lista.sort(function(a, b){return a - b}); 
console.log('orden ' + lista);
    if((lista.length % 2) === 0){
        const elem1 = lista[parseInt(lista.length / 2) - 1];
        const elem2 = lista[parseInt(lista.length / 2)];
        const medianaLista = calcularMediaAritmetica([elem1, elem2]);
        return medianaLista;
    }else{
        const medianaLista = lista[parseInt(lista.length / 2)];
        return medianaLista;
    }

}

function calcularModa(lista){
    const lista1Count = {};
    lista.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else{
                lista1Count[elemento] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
           return  valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = lista1Array[lista1Array.length-1];
    return moda;
}

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}