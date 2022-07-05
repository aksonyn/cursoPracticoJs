function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function precioDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const selectCupon = document.getElementById("selectCupon");
    const cuponDiscount= selectCupon.options[selectCupon.selectedIndex].text;


    if( discountValue != "" && cuponDiscount == "Selecciona un Cupon"){ //ejecutamos tomando el valor de descuento ingresado
        const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);
        const responsePrice = document.getElementById("responsePrice");
        responsePrice.innerText = "El Precio con descuento son: $" + precioConDescuento;
        
    }else if(discountValue == "" && cuponDiscount != "Selecciona un Cupon"){ // ejecutamos tomando la opcion del select
        parseInt(cuponDiscount);
        const precioConDescuento = calcularPrecioDescuento(priceValue, cuponDiscount);
        responsePrice.innerText = "El Precio con descuento son: $" + precioConDescuento;
        
    }else if(discountValue == "" && cuponDiscount == "Selecciona un Cupon"){ // alerta si se ingresa un descuento especial y un cupon al mismo tiempo
        alert("solo puedes seleccionar un cupon o ingresar un descuento especial");
    }else{
        alert("Debes seleccionar un cupon o ingresar un descuento especial");
    }
}

function myOnLoad() { //se ejecuta esta funcion durante la carga del DOM
    cargarCupones();
}

function cargarCupones(){ //creamos las opciones
    var cupones= ["Selecciona un Cupon",5,10,15,20,25,30,35];
    addOptions("selectCupon", cupones);
}

function addOptions(domElement, cupones){ //a;adimos las opciones al HTML
    var select = document.getElementsByName("cupon")[0];

    for(value in cupones) {
        var option = document.createElement("option");
        option.text = cupones[value];
        select.add(option);
    }
}