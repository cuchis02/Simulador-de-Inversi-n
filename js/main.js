function simulador() {

    const camponombre = document.getElementById("nombres") .value;
    const campotelefono = document.getElementById("telefono") .value;
    const campoemail = document.getElementById("email") .value;
    const campomonto = parseInt(document.getElementById("inversion") .value);
    const campotiempo = parseInt(document.getElementById("tiempo") .value);
    const contPre = document.getElementById("pre");
    const contPost = document.getElementById("post");
    const showtiempo = document.getElementById("tiempo-show");
    const showinteres = document.getElementById("interes-show");
    const shownombres = document.getElementById("nombres-show");
    const showemail = document.getElementById("email-show");
    let interes = 0;
    let total = 0;
    const showtotal = document.getElementById("total-show");
    const showganancia = document.getElementById("ganancia-show");

    shownombres.innerText = camponombre;
    showemail.innerText = campoemail;

    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");

    switch (campotiempo) {
        case 1:
            showtiempo.innerText = "12 MESES";
            showinteres.innerText = "0.8%";
            interes = (campomonto * 0.008)*12;
            total = campomonto + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;

        case 2:
            showtiempo.innerText = "24 MESES";
            showinteres.innerText = "1.3%";
            interes = (campomonto * 0.013)*24;
            total = campomonto + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;

        case 3:
            showtiempo.innerText = "36 MESES";
            showinteres.innerText = "1.7%";
            interes = (campomonto * 0.017)*36;
            total = campomonto + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;
            
        default:
            break;
    }



}




// Seleccionamos el botón por su id
const boton = document.getElementById('simulador-btn');

// Usamos addEventListener para escuchar el evento 'click'
boton.addEventListener('click', simulador);

