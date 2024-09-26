const agregarClaseVerde = (elements) => {
    elements.forEach(element => element.classList.add("verde"));
};

const PORCENTAJE = 1.0157;
const PORCENTAJE_REAL = 1.0157;
const PORCENTAJE_RETIRO = 0.05;
const hoy = new Date().toISOString().split('T')[0];

const cuantoDemoroForm = document.querySelector("#cuanto-demoro");
const cuantoDemoroTengo = document.querySelector("#cuanto-demoro-tengo");
const cuantoDemoroQuieroTener = document.querySelector("#cuanto-demoro-quiero-tener");
const cuantoDemoroDias = document.querySelector("#cuanto-demoro-dias");
const cuantoDemoroFecha = document.querySelector("#cuanto-demoro-fecha");
const cuantoDemoroRetiro = document.querySelector("#cuanto-demoro-retiro");
const cuantoDemoroFechaInicio = document.querySelector("#cuanto-demoro-fecha-inicio");

cuantoDemoroFechaInicio.value = hoy;

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
        
        const fechaInicio = new Date(cuantoDemoroFechaInicio.value);
        const fechaFinal = new Date(fechaInicio.getTime() + resultado * 86400000);

        cuantoDemoroDias.innerText = resultado.toLocaleString("es-AR");
        cuantoDemoroFecha.innerText = fechaFinal.toLocaleDateString('es-ES');
        cuantoDemoroRetiro.innerText = Number((quieroTener - (quieroTener * PORCENTAJE_RETIRO)).toFixed(2)).toLocaleString("es-AR");

        agregarClaseVerde([cuantoDemoroDias, cuantoDemoroFecha, cuantoDemoroFechaInicio, cuantoDemoroRetiro]);
    }
});

cuantoDemoroFechaInicio.addEventListener("change", () => {
    cuantoDemoroForm.dispatchEvent(new Event('submit', { cancelable: true }));
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
const cuantoEnDiasFechaInicio = document.querySelector("#cuanto-en-dias-fecha-inicio");

cuantoEnDiasFechaInicio.value = hoy;

cuantoEnDiasForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(cuantoEnDiasTengo.value.trim());
    const diasAOperar = Number(cuantoEnDiasDiasAOperar.value.trim());

    if (isNaN(tengo) || isNaN(diasAOperar)) {
        alert("Debés ingresar números en ambos campos.");
    } else if (tengo <= 0 || diasAOperar <= 0) {
        alert("Los números no pueden ser negativos ni cero.");
    } else {
        cuantoEnDiasDias.innerText = diasAOperar.toLocaleString("es-AR");

        const fechaInicio = new Date(cuantoEnDiasFechaInicio.value);
        const fechaFinal = new Date(fechaInicio.getTime() + diasAOperar * 86400000);

        const resultado = Number((tengo * Math.pow(PORCENTAJE, diasAOperar)).toFixed(2));
        cuantoEnDiasUSDT.innerText = resultado.toLocaleString("es-AR");
        cuantoEnDiasFecha.innerText = fechaFinal.toLocaleDateString('es-ES');
        cuantoEnDiasRetiro.innerText = Number((resultado - (resultado * PORCENTAJE_RETIRO)).toFixed(2)).toLocaleString("es-AR");

        agregarClaseVerde([cuantoEnDiasDias, cuantoEnDiasUSDT, cuantoEnDiasFecha, cuantoEnDiasFechaInicio, cuantoEnDiasRetiro]);
    }
});

cuantoEnDiasFechaInicio.addEventListener("change", () => {
    cuantoEnDiasForm.dispatchEvent(new Event('submit', { cancelable: true }));
});

// Form 3: Calcular cuántos días necesito para ganar X USDT diarios
//! Math.log(quiero / (tengo * (PORCENTAJE_REAL - 1))) / Math.log(PORCENTAJE)
const cuantoParaUSDTDiariosForm = document.querySelector("#cuanto-para-usdt-diarios");
const cuantoParaUSDTDiariosTengo = document.querySelector("#cuanto-para-usdt-diarios-tengo");
const cuantoParaUSDTDiariosQuiero = document.querySelector("#cuanto-para-usdt-diarios-quiero");
const cuantoParaUSDTDiariosDias = document.querySelector("#cuanto-para-usdt-diarios-dias");
const cuantoParaUSDTDiariosUSDT = document.querySelector("#cuanto-para-usdt-diarios-usdt");
const cuantoParaUSDTDiariosFecha = document.querySelector("#cuanto-para-usdt-diarios-fecha");
const cuantoParaUSDTDiariosFechaInicio = document.querySelector("#cuanto-para-usdt-diarios-fecha-inicio");

cuantoParaUSDTDiariosFechaInicio.value = hoy;

cuantoParaUSDTDiariosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(cuantoParaUSDTDiariosTengo.value.trim());
    const quiero = Number(cuantoParaUSDTDiariosQuiero.value.trim());

    if (isNaN(tengo) || isNaN(quiero)) {
        alert("Debés ingresar un número en ambos campos.");
    } else if (tengo <= 0 || quiero <= 0) {
        alert("Los números no pueden ser negativos ni cero.");
    } else {
        const resultado = Number(Math.ceil(Math.log(quiero / (tengo * (PORCENTAJE_REAL - 1))) / Math.log(PORCENTAJE)));

        if (resultado <= 0) {
            alert("Ya estás ganando eso o más.");
        } else {
            cuantoParaUSDTDiariosDias.innerText = resultado.toLocaleString("es-AR");
            cuantoParaUSDTDiariosUSDT.innerText = quiero.toLocaleString("es-AR");

            const fechaInicio = new Date(cuantoParaUSDTDiariosFechaInicio.value);
            const fechaFinal = new Date(fechaInicio.getTime() + resultado * 86400000);
            
            cuantoParaUSDTDiariosFecha.innerText = fechaFinal.toLocaleDateString('es-ES');
            
            agregarClaseVerde([cuantoParaUSDTDiariosDias, cuantoParaUSDTDiariosUSDT, cuantoParaUSDTDiariosFechaInicio, cuantoParaUSDTDiariosFecha]);
        }
    }
});

cuantoParaUSDTDiariosFechaInicio.addEventListener("change", () => {
    cuantoParaUSDTDiariosForm.dispatchEvent(new Event('submit', { cancelable: true }));
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
        const necesitoTener = Number((quieroGanar / (PORCENTAJE_REAL - 1)).toFixed(2));
        cuantoNecesitoUSDT.innerText = quieroGanar.toLocaleString("es-AR");
        cuantoNecesitoTener.innerText = necesitoTener.toLocaleString("es-AR");
        
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


/*
const PORCENTAJE_EVENTO = 1.0264;
const REDUCCION_DIARIA = 0.99;
const PORCENTAJES_PUNTOS = [0.8, 1, 0.6];

document.getElementById("evento").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tengo = Number(document.getElementById("evento-tengo").value.trim());
    const comisiones = Number(document.getElementById("evento-comisiones").value.trim());

    if (isNaN(tengo) || isNaN(comisiones) || tengo <= 0 || comisiones < 0) {
        alert("Debés ingresar números válidos en ambos campos.");
        return;
    }

    let total = tengo;
    let gananciaNeta = 0;
    let puntosTotales = 0;

    for (let i = 0; i < 21; i++) {
        const gananciaDiaria = total * (PORCENTAJE_EVENTO - 1);
        
        gananciaNeta += gananciaDiaria;
        
        total = (total + gananciaDiaria) * REDUCCION_DIARIA;
        
        let porcentajePuntos;
        if (i < 7) {
            porcentajePuntos = PORCENTAJES_PUNTOS[0];
        } else if (i < 14) {
            porcentajePuntos = PORCENTAJES_PUNTOS[1];
        } else {
            porcentajePuntos = PORCENTAJES_PUNTOS[2];
        }

        puntosTotales += gananciaDiaria * porcentajePuntos;
    }

    const comisionesTotales = comisiones * 21;
    puntosTotales += comisionesTotales * 0.8;
    const puntos = Math.floor(puntosTotales);
    
    document.getElementById("evento-puntos").innerText = puntos;

    let premio = 0;
    if (puntos >= 30000) {
        premio = 8000;
    } else if (puntos >= 10000) {
        premio = 2000;
    } else if (puntos >= 5000) {
        premio = 700;
    } else if (puntos >= 3000) {
        premio = 300;
    } else if (puntos >= 1000) {
        premio = 80;
    }

    if (premio > 0) {
        document.querySelector(".vas-a-llegar.ganar").style.display = 'block';
        document.getElementById("evento-ganar").innerText = premio + " USDT";
        document.querySelector(".vas-a-llegar.perder").style.display = 'none';
        agregarClaseVerde([document.querySelector(".vas-a-llegar.ganar")]);

        document.querySelector(".section-evento").classList.add("section-evento-verde");
        document.querySelector(".section-evento").classList.remove("section-evento-rojo");
    } else {
        document.querySelector(".vas-a-llegar.ganar").style.display = 'none';
        document.querySelector(".vas-a-llegar.perder").style.display = 'block';
        agregarClaseVerde([document.querySelector(".vas-a-llegar.perder")]);

        document.querySelector(".section-evento").classList.add("section-evento-rojo");
        document.querySelector(".section-evento").classList.remove("section-evento-verde");
    }

    agregarClaseVerde([document.getElementById("evento-puntos")]);
});*/
