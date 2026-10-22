function calcular(){
    let valor = parseFloat(document.getElementById("valor").value);
    let hora = parseFloat(document.getElementById("horas").value);
    let salario = valor * hora;
    document.getElementById("salario").value = salario.toLocaleString('es-CO');
}
