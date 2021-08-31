function montoPagar(precioOriginal,descuento) {
    return porcentajeAPagar = precioOriginal - (precioOriginal*(descuento/100));
}
function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = montoPagar(priceValue, discountValue);
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento es "+precioConDescuento;
}