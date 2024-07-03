const agregarClaseVerde = (elements) => {
    elements.forEach(element => element.classList.add("verde"));
};

//! Math.ceil(Math.log(quieroTener / tengo) / Math.log(1.01414))
// Form 1: Cálculo para saber cuánto tardaría en llegar a X monto
const cuantoDemoroForm = document.querySelector("#cuanto-demoro");
const cuantoDemoroTengo = document.querySelector("#cuanto-demoro-tengo");
const cuantoDemoroQuieroTener = document.querySelector("#cuanto-demoro-quiero-tener");
const cuantoDemoroDias = document.querySelector("#cuanto-demoro-dias");
const cuantoDemoroFecha = document.querySelector("#cuanto-demoro-fecha");
const cuantoDemoroRetiro = document.querySelector("#cuanto-demoro-retiro");

cuantoDemoroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(cuantoDemoroTengo.value.trim());
    const quieroTener = Number(cuantoDemoroQuieroTener.value.trim());

    if (isNaN(quieroTener) || isNaN(tengo) || tengo === 0 || quieroTener === 0) {
        alert("Debés ingresar números en ambos campos.");
    } else if (quieroTener <= tengo) {
        alert("El monto actual debe ser menor al monto deseado.");
    } else if (quieroTener < 0 || tengo < 0) {
        alert("Los números no pueden ser negativos.");
    } else {
        const resultado = Math.ceil(Math.log(quieroTener / tengo) / Math.log(1.01414));
        cuantoDemoroDias.innerText = resultado;
        cuantoDemoroFecha.innerText = new Date(Date.now() + resultado * 86400000).toLocaleDateString('es-ES');
        cuantoDemoroRetiro.innerText = (quieroTener - (quieroTener * 0.05)).toFixed(2);
        
        agregarClaseVerde([cuantoDemoroDias, cuantoDemoroFecha, cuantoDemoroRetiro]);
    }
});

//! tengo * Math.pow(1.01414, dias)
// Form 2: Cálculo para saber a cuánto llegaría en X días
const cuantoEnDiasForm = document.querySelector("#cuanto-en-dias");
const cuantoEnDiasTengo = document.querySelector("#cuanto-en-dias-tengo");
const cuantoEnDiasDiasAOperar = document.querySelector("#cuanto-en-dias-dias-a-operar");
const cuantoEnDiasDias = document.querySelector("#cuanto-en-dias-dias");
const cuantoEnDiasUSDT = document.querySelector("#cuanto-en-dias-usdt");
const cuantoEnDiasFecha = document.querySelector("#cuanto-en-dias-fecha");
const cuantoEnDiasRetiro = document.querySelector("#cuanto-en-dias-retiro");

cuantoEnDiasForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(cuantoEnDiasTengo.value.trim());
    const diasAOperar = Number(cuantoEnDiasDiasAOperar.value.trim());

    if (isNaN(tengo) || isNaN(diasAOperar) || tengo === 0 || diasAOperar === 0) {
        alert("Debés ingresar números en ambos campos.");
    } else if (tengo < 0 || diasAOperar < 0) {
        alert("Los números no pueden ser negativos.");
    } else {
        const resultado = Math.floor(tengo * Math.pow(1.01414, diasAOperar));
        
        cuantoEnDiasDias.innerText = diasAOperar;
        cuantoEnDiasUSDT.innerText = resultado;
        cuantoEnDiasFecha.innerText = new Date(Date.now() + diasAOperar * 86400000).toLocaleDateString('es-ES');
        cuantoEnDiasRetiro.innerText = (resultado - (resultado * 0.05)).toFixed(2);

        agregarClaseVerde([cuantoEnDiasDias, cuantoEnDiasUSDT, cuantoEnDiasFecha, cuantoEnDiasRetiro]);
    }
});