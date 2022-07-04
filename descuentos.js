//const precioOriginal= 120;
//const descuento=18;

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

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const responsePrice = document.getElementById("responsePrice");
    responsePrice.innerText = "El Precio con descuento son: $" + precioConDescuento
};

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/