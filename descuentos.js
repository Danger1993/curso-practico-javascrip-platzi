const preciOriginal = 150;
const descuento = 19;


function calcularPrecioDescuento(precio, descuento){
    const porcentagePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentagePrecioConDescuento) / 100;
        return precioConDescuento;
}

calcularPrecioDescuento(preciOriginal, descuento);


function precioReal(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;

    const precioApagar = calcularPrecioDescuento(precio, descuento);
    alert(precioApagar);
}