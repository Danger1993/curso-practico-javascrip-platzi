const preciOriginal = 150;
const descuento = 19;

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioDescuento(precio, descuento){
    const porcentagePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentagePrecioConDescuento) / 100;
        return precioConDescuento;
}

calcularPrecioDescuento(preciOriginal, descuento);


function precioReal(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
          descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
          descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
          descuento = 25;
        break;
      }

    const precioApagar = calcularPrecioDescuento(precio, descuento);
     const resultP = document.getElementById("resultP");
     resultP.innerText = "El precio con descuento es: $" + precioApagar;
}