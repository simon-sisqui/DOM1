function calcular(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);
    let subtotal = precio * cantidad;
    document.getElementById("subtotal").value = subtotal.toLocaleString('es-CO');
    let IVA = subtotal * 0.19;
    document.getElementById("IVA").value = IVA.toLocaleString('es-CO');
    let descuento = subtotal * 0.10;
    document.getElementById("descuento").value = descuento.toLocaleString('es-CO');
    let total_pagar = subtotal + IVA - descuento;
    document.getElementById("total_pagar").value = total_pagar.toLocaleString('es-CO');
}
