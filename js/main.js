//Math.ceil(Math.log(quieroTener / tengo) / Math.log(1.01414))

const cuantoDemoroForm = document.querySelector("#cuanto-demoro");
const cuantoDemoroTengo = document.querySelector("#cuanto-demoro-tengo");
const cuantoDemoroQuieroTener = document.querySelector("#cuanto-demoro-quiero-tener");
const cuantoDemoroDias = document.querySelector("#cuanto-demoro-dias");
const cuantoDemoroFecha = document.querySelector("#cuanto-demoro-fecha");

cuantoDemoroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        isNaN(cuantoDemoroQuieroTener.value.trim()) ||
        isNaN(cuantoDemoroTengo.value.trim())       ||
        cuantoDemoroTengo.value.trim() === ""       ||
        cuantoDemoroQuieroTener.value.trim() === ""
    ) {
        alert("Debés ingresar números en ambos campos.");
    } else if (Number(cuantoDemoroQuieroTener.value) <= Number(cuantoDemoroTengo.value)) {
        alert("El monto actual debe ser menor al monto deseado.");
    } else if (cuantoDemoroQuieroTener.value < 0 || cuantoDemoroTengo.value < 0) {
        alert("Los números no pueden ser negativos.");
    } else {
        const resultado = Math.ceil(Math.log(cuantoDemoroQuieroTener.value / cuantoDemoroTengo.value) / Math.log(1.01414));
        cuantoDemoroDias.innerText = resultado;
        cuantoDemoroFecha.innerText = new Date(Date.now() + resultado * 86400000).toLocaleDateString('es-ES');
        cuantoDemoroDias.classList.add("verde");
        cuantoDemoroFecha.classList.add("verde");
    }
})


//tengo * Math.pow(1.01414, dias)

const cuantoEnDiasForm = document.querySelector("#cuanto-en-dias");
const cuantoEnDiasTengo = document.querySelector("#cuanto-en-dias-tengo");
const cuantoEnDiasDiasAOperar = document.querySelector("#cuanto-en-dias-dias-a-operar");
const cuantoEnDiasDias = document.querySelector("#cuanto-en-dias-dias");
const cuantoEnDiasUSDT = document.querySelector("#cuanto-en-dias-usdt");
const cuantoEnDiasFecha = document.querySelector("#cuanto-en-dias-fecha");

cuantoEnDiasForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        isNaN(cuantoEnDiasTengo.value.trim()) ||
        isNaN(cuantoEnDiasDiasAOperar.value.trim()) ||
        cuantoEnDiasTengo.value.trim() === "" ||
        cuantoEnDiasDiasAOperar.value.trim() === ""
    ) {
        alert("Debés ingresar números en ambos campos.");
    } else if (cuantoEnDiasTengo.value.trim() < 0 || Number(cuantoEnDiasDiasAOperar.value.trim()) < 0) {
        alert("Los números no pueden ser negativos.");
    }else {
        cuantoEnDiasUSDT.innerText = Math.floor(cuantoEnDiasTengo.value * Math.pow(1.01414, cuantoEnDiasDiasAOperar.value));
        cuantoEnDiasUSDT.classList.add("verde");

        cuantoEnDiasDias.innerText = cuantoEnDiasDiasAOperar.value;
        cuantoEnDiasDias.classList.add("verde");

        cuantoEnDiasFecha.innerText = new Date(Date.now() + Number(cuantoEnDiasDiasAOperar.value) * 86400000).toLocaleDateString('es-ES');
        cuantoEnDiasFecha.classList.add("verde");
    }
})