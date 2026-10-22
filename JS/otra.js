function calcularPresupuesto(){
    let numero_inv = parseInt(document.getElementById("numero_inv").value);
    let cost_comida = parseFloat(document.getElementById("cost_comida").value);
    let cost_bebida = parseFloat(document.getElementById("cost_bebida").value);
    let cost_decor = parseFloat(document.getElementById("cost_decor").value);
    let cost_musica = parseFloat(document.getElementById("cost_musica").value);
    let propina = parseFloat(document.getElementById("propina-porc").value);

    let total_comida = cost_comida * numero_inv;
    let total_bebidas = cost_bebida * numero_inv;
    let subtotal = total_comida + total_bebidas + cost_decor + cost_musica;
    let valor_propina = subtotal * (propina / 100);
    let total_general = subtotal + valor_propina;
    let costo_invitado = total_general / numero_inv;

    document.getElementById("t_comida").innerText = total_comida.toLocaleString('es-CO');
    document.getElementById("t_bebida").innerText = total_bebidas.toLocaleString('es-CO');
    document.getElementById("t_decor").innerText = cost_decor.toLocaleString('es-CO');
    document.getElementById("t_musica").innerText = cost_musica.toLocaleString('es-CO');
    document.getElementById("t_subtotal").innerText = subtotal.toLocaleString('es-CO');
    document.getElementById("t_propina").innerText = valor_propina.toLocaleString('es-CO');
    document.getElementById("t_total").innerText = total_general.toLocaleString('es-CO');
    document.getElementById("t_costo_inv").innerText = costo_invitado.toLocaleString('es-CO');
}
