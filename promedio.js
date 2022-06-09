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
