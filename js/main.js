const agregarClaseVerde = (elements) => {
    elements.forEach(element => element.classList.add("verde"));
};

const PORCENTAJE = 1.0130285714286;
const PORCENTAJE_REAL = 1.01518292;
const PORCENTAJE_RETIRO = 0.05;

// Form 1: Calcular cuánto voy a demorar en llegar a X USDT
//! Math.log(quieroTener / tengo) / Math.log(PORCENTAJE)
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
        cuantoDemoroRetiro.innerText = (quieroTener - (quieroTener * PORCENTAJE_RETIRO)).toFixed(2);
        
        agregarClaseVerde([cuantoDemoroDias, cuantoDemoroFecha, cuantoDemoroRetiro]);
    }
});

// Form 2: Calcular cuántos USDT voy a tener en X días
//! tengo * Math.pow(PORCENTAJE, dias)
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
        cuantoEnDiasRetiro.innerText = (resultado - (resultado * PORCENTAJE_RETIRO)).toFixed(2);

        agregarClaseVerde([cuantoEnDiasDias, cuantoEnDiasUSDT, cuantoEnDiasFecha, cuantoEnDiasRetiro]);
    }
});

// Form 3: Calcular cuántos días necesito para ganar X USDT diarios
//! Math.log(quiero / (tengo * (PORCENTAJE_REAL - 1))) / Math.log(PORCENTAJE)
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
        const resultado = Math.ceil(Math.log(quiero / (tengo * (PORCENTAJE_REAL - 1))) / Math.log(PORCENTAJE));

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


// Form 4: Calcular cuánto necesito tener para ganar X USDT diarios
//! quiero / (PORCENTAJE_REAL - 1)
const cuantoNecesitoParaUSDTDiariosForm = document.querySelector("#cuanto-necesito-para-usdt-diarios");
const cuantoNecesitoQuieroGanar = document.querySelector("#cuanto-necesito-quiero-ganar");
const cuantoNecesitoUSDT = document.querySelector("#cuanto-necesito-usdt");
const cuantoNecesitoTener = document.querySelector("#cuanto-necesito-tener");

cuantoNecesitoParaUSDTDiariosForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const quieroGanar = Number(cuantoNecesitoQuieroGanar.value.trim());

    if (isNaN(quieroGanar) || quieroGanar <= 0) {
        alert("Debés ingresar un número mayor que cero.");
    } else {
        const necesitoTener = (quieroGanar / (PORCENTAJE_REAL - 1)).toFixed(2);
        cuantoNecesitoUSDT.innerText = quieroGanar;
        cuantoNecesitoTener.innerText = necesitoTener;
        
        agregarClaseVerde([cuantoNecesitoUSDT, cuantoNecesitoTener]);
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
manejarTeclaSiguiente(cuantoParaUSDTDiariosQuiero, cuantoNecesitoQuieroGanar);