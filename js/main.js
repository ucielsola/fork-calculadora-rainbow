const agregarClaseVerde = (elements) => {
    elements.forEach(element => element.classList.add("verde"));
};

const PORCENTAJE = 1.0130285714286;

// Form 1: Calcular cuánto voy a demorar en llegar a X USDT
//! Math.log(quieroTener / tengo) / Math.log(1.01414)
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

    if (isNaN(quieroTener) || isNaN(tengo)) {
        alert("Debés ingresar números en ambos campos.");
    } else if (quieroTener <= tengo) {
        alert("El monto actual debe ser menor al monto deseado.");
    } else if (quieroTener <= 0 || tengo <= 0) {
        alert("Los números no pueden ser negativos ni cero.");
    } else {
        const resultado = Math.ceil(Math.log(quieroTener / tengo) / Math.log(PORCENTAJE));
        cuantoDemoroDias.innerText = resultado;
        cuantoDemoroFecha.innerText = new Date(Date.now() + resultado * 86400000).toLocaleDateString('es-ES');
        cuantoDemoroRetiro.innerText = (quieroTener - (quieroTener * 0.05)).toFixed(2);
        
        agregarClaseVerde([cuantoDemoroDias, cuantoDemoroFecha, cuantoDemoroRetiro]);
    }
});

// Form 2: Calcular cuántos USDT voy a tener en X días
//! tengo * Math.pow(1.01414, dias)
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

    if (isNaN(tengo) || isNaN(diasAOperar)) {
        alert("Debés ingresar números en ambos campos.");
    } else if (tengo <= 0 || diasAOperar <= 0) {
        alert("Los números no pueden ser negativos ni cero.");
    } else {
        cuantoEnDiasDias.innerText = diasAOperar;
        const resultado = (tengo * Math.pow(PORCENTAJE, diasAOperar)).toFixed(2);
        cuantoEnDiasUSDT.innerText = resultado;
        cuantoEnDiasFecha.innerText = new Date(Date.now() + diasAOperar * 86400000).toLocaleDateString('es-ES');
        cuantoEnDiasRetiro.innerText = (resultado - (resultado * 0.05)).toFixed(2);

        agregarClaseVerde([cuantoEnDiasDias, cuantoEnDiasUSDT, cuantoEnDiasFecha, cuantoEnDiasRetiro]);
    }
});

// Form 3: Calcular cuántos días necesito para ganar X USDT diarios
//! Math.log(quiero / (tengo * (1.01414 - 1))) / Math.log(1.01414)
const cuantoParaUSDTDiariosForm = document.querySelector("#cuanto-para-usdt-diarios");
const cuantoParaUSDTDiariosTengo = document.querySelector("#cuanto-para-usdt-diarios-tengo");
const cuantoParaUSDTDiariosQuiero = document.querySelector("#cuanto-para-usdt-diarios-quiero");
const cuantoParaUSDTDiariosDias = document.querySelector("#cuanto-para-usdt-diarios-dias");
const cuantoParaUSDTDiariosUSDT = document.querySelector("#cuanto-para-usdt-diarios-usdt");
const cuantoParaUSDTDiariosFecha = document.querySelector("#cuanto-para-usdt-diarios-fecha");

cuantoParaUSDTDiariosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(cuantoParaUSDTDiariosTengo.value.trim());
    const quiero = Number(cuantoParaUSDTDiariosQuiero.value.trim());

    if (isNaN(tengo) || isNaN(quiero)) {
        alert("Debés ingresar un número en ambos campos.");
    } else if (tengo <= 0 || quiero <= 0) {
        alert("Los números no pueden ser negativos ni cero.");
    } else {
        const resultado = Math.ceil(Math.log(quiero / (tengo * (PORCENTAJE - 1))) / Math.log(PORCENTAJE));

        if (resultado <= 0) {
            alert("Ya estás ganando eso o más.");
        } else {
            cuantoParaUSDTDiariosDias.innerText = resultado;
            cuantoParaUSDTDiariosUSDT.innerText = quiero;
            cuantoParaUSDTDiariosFecha.innerText = new Date(Date.now() + resultado * 86400000).toLocaleDateString('es-ES');
            
            agregarClaseVerde([cuantoParaUSDTDiariosDias, cuantoParaUSDTDiariosUSDT, cuantoParaUSDTDiariosFecha]);
        }
    }
});


// Teclas de siguiente
const manejarTeclaSiguiente = (input, nextInput) => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            nextInput.focus();
        }
    });
}

manejarTeclaSiguiente(cuantoDemoroTengo, cuantoDemoroQuieroTener);
manejarTeclaSiguiente(cuantoEnDiasTengo, cuantoEnDiasDiasAOperar);
manejarTeclaSiguiente(cuantoParaUSDTDiariosTengo, cuantoParaUSDTDiariosQuiero);