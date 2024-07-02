//Math.ceil(Math.log(2000 / 570) / Math.log(1.01414))

const cuantoDemoroForm = document.querySelector("#cuanto-demoro");
const cuantoDemoroActual = document.querySelector("#cuanto-demoro #actual");
const cuantoDemoroLlegar = document.querySelector("#cuanto-demoro #llegar");
const cuantoDemoroDias = document.querySelector("#dias-totales");
const fechaFinal = document.querySelector("#fecha-final");

cuantoDemoroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNaN(cuantoDemoroLlegar.value.trim()) || isNaN(cuantoDemoroActual.value.trim()) || cuantoDemoroActual.value.trim() === "" || cuantoDemoroLlegar.value.trim() === "") {
        alert("Debés ingresar números en ambos campos");
    } else if ((Math.ceil(Math.log(cuantoDemoroLlegar.value / cuantoDemoroActual.value) / Math.log(1.01414))) < 0) {
        alert("El monto actual debe ser menor al monto deseado.")
    } else {
        const calculo = Math.ceil(Math.log(cuantoDemoroLlegar.value / cuantoDemoroActual.value) / Math.log(1.01414));
        cuantoDemoroDias.innerText = calculo;
        cuantoDemoroDias.classList.add("verde");
        const fecha = new Date(new Date().setDate(new Date().getDate() + calculo)).toLocaleDateString('es-ES');
        fechaFinal.innerText = fecha;
        fechaFinal.classList.add("verde");
    }
})


//tengo * Math.pow(1.01414, dias)

const cuantoEnDiasForm = document.querySelector("#cuanto-en-dias");
const cuantoEnDiasActual = document.querySelector("#actual-dias");
const cuantoEnDiasLlegar = document.querySelector("#dias");
const cuantoEnDiasUSDT = document.querySelector("#usdt-en-dias");
const cuantoEnDiasSpanDias = document.querySelector("#usdt-cuantos-dias");

cuantoEnDiasForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNaN(cuantoEnDiasActual.value.trim()) || isNaN(cuantoEnDiasLlegar.value.trim()) || cuantoEnDiasActual.value.trim() === "" || cuantoEnDiasLlegar.value.trim() === "") {
        alert("Debés ingresar números en ambos campos");
    } else {
        cuantoEnDiasUSDT.innerText = (Math.floor(cuantoEnDiasActual.value * Math.pow(1.01414, cuantoEnDiasLlegar.value)));
        cuantoEnDiasSpanDias.innerText = cuantoEnDiasLlegar.value;
        cuantoEnDiasUSDT.classList.add("verde");
        cuantoEnDiasSpanDias.classList.add("verde");
    }
})