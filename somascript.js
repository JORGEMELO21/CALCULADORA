function somar() {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    if (!numero1 || !numero2) {
        alert('Digite os dois números.');
        return;
    }

    const num1 = parseInt(numero1, 10);
    const num2 = parseInt(numero2, 10);

    const resultado = num1 + num2;

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = resultado;
}