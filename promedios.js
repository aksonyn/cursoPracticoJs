function mediaAritmetica(){
    const inputLista = document.getElementById("inputLista");
    const valueLista = inputLista.value;

    const promedio = calcularMediaAritmetica(valueLista);
    const responsePromedio = document.getElementById("responsePromedio");
    responsePromedio.innerText = "El Promedio es: " + promedio;
}

function calcularMediaAritmetica(lista){

    //let sumaLista=0;

    //for(let i = 0; i < lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.split(',');
    const arrayLista = sumaLista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    console.log(sumaLista);
    console.log(typeof sumaLista);
    console.log(arrayLista);
    console.log(typeof arrayLista);
    const promedioLista = arrayLista/arrayLista.length;
    console.log(promedioLista);
    console.log(typeof promedioLista);
    return promedioLista;

}