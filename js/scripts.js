// querySelector
const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';

// querySelectorAll
const enlances = document.querySelectorAll('.navegacion a');
enlances[0].textContent = 'Nuevo Enlance';

// Generar un nuevo enlance
const nuevoEnlance = document.createElement('A');

// Agregar el href
nuevoEnlance.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlance.textContent = 'Nuevo Enlace';

// Agregar la clase
nuevoEnlance.classList.add('navegacion__enlance');

// Agregarlo al documentos
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlance);

console.log(nuevoEnlance);

// Eventos

console.log(1);

window.addEventListener('load', function () { //Load espera a que el JS y los archivos se hayan cargado para ejecutarse
    console.log(2);
});

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () {//Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function () {
    console.log('scrolling....')
}

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // Validar un formulario

//     console.log('Enviando formulario');
// })



// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensake: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

//Evento Submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    //Validar formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //Previene la ejecucion del codigo
    }

    //Enviar formulario 

    console.log('enviando formulario')
    mostrarAlerta('El formulario a sido enviado');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparecer despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

