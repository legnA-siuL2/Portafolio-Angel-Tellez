/* Made By
================================================================
* Template:  	 Portafolio-Angel Tellez
* Written by: 	 Luis Angel Tellez Rojas
* Description:   Main Custom Script File
================================================================
*/
/* Tabla de contenido
=================================================
-Tabla de contenido.
=================================================
	1. Preloader
        1.1 Preloader
        1.2 Hide Preloader
    2. Typed   
	3. Scroll
	4. Mobile menu
	5. Carousel
	6. Counter
    7. Isotope Portfolio Filter
	8. Tooltips
    9. Scroll to top
    10.Contact Form
=======================================================*/
/* Detalle secciones
1. Preloader: Esta sección contiene código para crear un efecto de animación de carga al abrir el sitio web. Utiliza las clases 'lds-ellipsis' y 'preloader' para mostrar y ocultar el preloader con una animación de desvanecimiento.
2. Typed: Se utiliza para generar el efecto de borrar y escribir frases iniciales en la sección Home. Usa la biblioteca "Typed.js" para este propósito.
3. Sections Scroll: Este bloque de código permite generar un efecto de desplazamiento suave al hacer clic en los enlaces internos. Utiliza la función "scrollToOffset" para realizar el desplazamiento suave.
4. Mobile Menu: Configura el menú para dispositivos móviles, de modo que el menú se muestre como una barra principal en la parte superior.
5. Carousel (Owl Carousel): Se utiliza la biblioteca "Owl Carousel" para dar efecto de carrusel a las referencias y a los modales del portafolio.
6. Counter: Importa la biblioteca "jQuery" para hacer el efecto de conteo en la sección Home de las estadísticas.
7. Isotope Portfolio Filter: Implementa un filtro personalizado para la sección de Portafolio. Permite filtrar las opciones de la cartera según las categorías seleccionadas.
8. Tooltips: Implementa la funcionalidad para crear el efecto de tooltip en ciertos elementos.
9. Scroll to top: Crea un botón interactivo en la esquina inferior derecha para volver al inicio de la página cuando se desplaza fuera de esta sección.
10. Contact Form: Se encarga del envío del formulario de contacto mediante AJAX, usando la biblioteca "jQuery". Muestra un mensaje de éxito o error según el resultado del envío.
*/

(function ($) {                      //Activa el modo estricto de JavaScript en el ámbito de la función. El modo estricto es una característica de JavaScript que impone restricciones adicionales y proporciona un conjunto más sólido de reglas para el lenguaje
	"use strict";

/*---------------------------------
    1.1 Preloader                    // (animación de carga al abrir el sitio web)
----------------------------------- */

window.addEventListener('load', function() {
    var ellipsisElements = document.querySelectorAll('.lds-ellipsis');
    ellipsisElements.forEach(function(element) {
        fadeOutElement(element); // Desvanece gradualmente los elementos con la clase 'lds-ellipsis'
    });

    var preloaderElement = document.querySelector('.preloader');
    setTimeout(function() {
        fadeOutElement(preloaderElement); // Desvanece gradualmente el elemento con la clase 'preloader'
    }, 333);

    setTimeout(function() {
        document.body.style.overflow = 'auto'; // Permite el desplazamiento del cuerpo del documento después de ocultar el preloader
    }, 666);
});
/*---------------------------------
    1.2 Ocultar Preloader            // (Oculta la animación de carga cuando se completa)
----------------------------------- */

function fadeOutElement(element) {
    var opacity = 1;
    var intervalId = setInterval(function() {
        opacity -= 0.05;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(intervalId);
            element.style.display = 'none'; // Oculta el elemento después de desvanecerse completamente
        }
    }, 20);
}


/*----------------------------------
    2. Typed                          // (para generar el efecto de borrar y escribir las frases iniciales en la sección Home)
------------------------------------ */

$(".typed").each(function() {
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings', // Elemento que contiene las cadenas de texto para mostrar
        loop: true, // Habilita la animación en bucle
        typeSpeed: 100, // Velocidad de escritura de cada carácter
        backSpeed: 50, // Velocidad de borrado de cada carácter
        backDelay: 1500, // Retraso después de que se complete la escritura antes de comenzar el borrado
    });
});


/*---------------------------------
    3. Sections Scroll               // (para generar un efecto mas agradable visualmente al desplazarse y que no sea de golpe)
----------------------------------- */

var smoothScrollElements = document.getElementsByClassName("smooth-scroll"); // Obtiene todos los elementos con la clase "smooth-scroll" y los almacena en la variable "smoothScrollElements"
var body = document.body; // Obtiene el elemento <body> y lo almacena en la variable "body"

if (body.classList.contains("side-header")) { // Verifica si el elemento <body> tiene la clase "side-header"
    for (var i = 0; i < smoothScrollElements.length; i++) { // Recorre todos los elementos con la clase "smooth-scroll"
        smoothScrollElements[i].addEventListener("click", function(event) { // Agrega un controlador de eventos para el evento "click" a cada elemento
            event.preventDefault(); // Evita el comportamiento predeterminado del evento de clic
            var sectionTo = this.getAttribute("href"); // Obtiene el valor del atributo "href" del elemento en el que se hizo clic y lo almacena en la variable "sectionTo"
            var targetOffset = document.querySelector(sectionTo).offsetTop; // Obtiene la posición vertical de desplazamiento de la sección correspondiente y la almacena en la variable "targetOffset"
            scrollToOffset(targetOffset, 1500); // Llama a la función "scrollToOffset" para realizar un desplazamiento suave hacia la sección correspondiente
        });
    }
} else {
    for (var i = 0; i < smoothScrollElements.length; i++) { // Recorre todos los elementos con la clase "smooth-scroll"
        smoothScrollElements[i].addEventListener("click", function(event) { // Agrega un controlador de eventos para el evento "click" a cada elemento
            event.preventDefault(); // Evita el comportamiento predeterminado del evento de clic
            var sectionTo = this.getAttribute("href"); // Obtiene el valor del atributo "href" del elemento en el que se hizo clic y lo almacena en la variable "sectionTo"
            var targetOffset = document.querySelector(sectionTo).offsetTop - 50; // Obtiene la posición vertical de desplazamiento de la sección correspondiente y la ajusta con un desplazamiento adicional hacia arriba de 50 píxeles
            scrollToOffset(targetOffset, 1500); // Llama a la función "scrollToOffset" para realizar un desplazamiento suave hacia la sección correspondiente
        });
    }
}

function scrollToOffset(offset, duration) { // Define la función "scrollToOffset" que realiza el desplazamiento suave hacia una posición específica
    var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // Obtiene la posición de desplazamiento vertical actual del documento y la almacena en la variable "start"
    var currentTime = 0; // Inicializa la variable "currentTime" como 0
    var increment = 20; // Establece el incremento en 20 (milisegundos)

    var animateScroll = function() { // Define una función "animateScroll" que realiza la animación del desplazamiento suave
        currentTime += increment; // Incrementa el valor de "currentTime" con el incremento establecido
        var easing = easeInOutExpo(currentTime, start, offset - start, duration); // Calcula la interpolación de desplazamiento utilizando la función "easeInOutExpo" y almacena el valor en "easing"
        window.scrollTo(0, easing); // Realiza el desplazamiento de la ventana hacia la posición interpolada "easing"
        if (currentTime < duration) { // Si el tiempo actual es menor que la duración establecida, sigue animando
            requestAnimationFrame(animateScroll); // Solicita al navegador que ejecute la función "animateScroll" en el siguiente cuadro de animación
        }
    };

    animateScroll(); // Llama a la función "animateScroll" para iniciar la animación del desplazamiento suave
}

function easeInOutExpo(t, b, c, d) { // Define la función "easeInOutExpo" que calcula la interpolación de desplazamiento
    if (t === 0) return b; // Si el tiempo es 0, devuelve el valor de inicio "b"
    if (t === d) return b + c; // Si el tiempo es igual a la duración, devuelve la suma de inicio "b" y cambio "c"
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b; // Calcula la interpolación cuando el tiempo es menor a la mitad de la duración
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b; // Calcula la interpolación cuando el tiempo es mayor a la mitad de la duración
}

/*---------------------------------
    4. Mobile Menu                   // (configura el menú para dispositivos mobiles, de forma que el menú no se muestre a la izquierda, si no como una barra principal en la parte de arriba)
----------------------------------- */

var navbarToggler = document.querySelector('.navbar-toggler'); // Selecciona el elemento con la clase "navbar-toggler" y lo almacena en la variable "navbarToggler"
navbarToggler.addEventListener('click', function() { // Agrega un controlador de eventos para el evento "click" al elemento "navbarToggler"
    this.classList.toggle('show'); // Alterna la clase "show" en el elemento actual (agrega si no está presente, y elimina si está presente)
});
var navbarNavLinks = document.querySelectorAll('.navbar-nav a'); // Selecciona todos los elementos con la etiqueta "a" dentro de ".navbar-nav" y los almacena en la variable "navbarNavLinks"
navbarNavLinks.forEach(function(link) { // Itera sobre cada enlace
    link.addEventListener('click', function() { // Agrega un controlador de eventos para el evento "click" a cada enlace
        document.querySelector('.navbar-collapse').classList.remove('show'); // Elimina la clase "show" del elemento con la clase "navbar-collapse"
        navbarToggler.classList.remove('show'); // Elimina la clase "show" del elemento "navbarToggler"
    });
});
var navbarCollapses = document.querySelectorAll('.navbar-side-open .collapse, .navbar-overlay .collapse'); // Selecciona los elementos con las clases "collapse" dentro de ".navbar-side-open" y ".navbar-overlay" y los almacena en la variable "navbarCollapses"
navbarCollapses.forEach(function(collapse) { // Itera sobre cada colapso
    collapse.addEventListener('show.bs.collapse', function(e) { // Agrega un controlador de eventos para el evento "show.bs.collapse" a cada colapso
        e.preventDefault(); // Evita el comportamiento predeterminado del evento
    });
    collapse.addEventListener('hide.bs.collapse', function(e) { // Agrega un controlador de eventos para el evento "hide.bs.collapse" a cada colapso
        e.preventDefault(); // Evita el comportamiento predeterminado del evento
    });
});
var navbarCollapseTogglers = document.querySelectorAll('.navbar-side-open [data-bs-toggle="collapse"], .navbar-overlay [data-bs-toggle="collapse"]'); // Selecciona los elementos con el atributo "data-bs-toggle" igual a "collapse" dentro de ".navbar-side-open" y ".navbar-overlay" y los almacena en la variable "navbarCollapseTogglers"
navbarCollapseTogglers.forEach(function(toggler) { // Itera sobre cada botón de alternancia de colapso
    toggler.addEventListener('click', function(e) { // Agrega un controlador de eventos para el evento "click" a cada botón de alternancia de colapso
        e.preventDefault(); // Evita el comportamiento predeterminado del evento
        var target = document.querySelector(this.getAttribute('data-bs-target')); // Obtiene el elemento especificado por el valor del atributo "data-bs-target" del botón de alternancia de colapso actual
        target.classList.toggle('show'); // Alterna la clase "show" en el elemento objetivo (agrega si no está presente, y elimina si está presente)
    });
});

/*---------------------------------
    5. Carousel (Owl Carousel)       // (importado desde la libreria Owl Carousel, para dar el efecto de carrusel a las referencias y de los modal del portafolio)
----------------------------------- */

$(document).ready(function() {
    $(".modal-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});

/*---------------------------------
    6. Counter                       // (Importado desde Jquery, sirve para hacer el efecto de conteo en la sección Home de las estadisticas)
----------------------------------- */

$(window).scroll(function() {
    $(".counter").each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var targetValue = parseInt($(this).attr('data-to')); // Obtener el valor objetivo del atributo data-to

        if (scroll > position - windowHeight) {
            $(this).countTo({
                from: 0, // Comenzar desde 0
                to: targetValue, // Utilizar el valor objetivo
                speed: 600,
                onComplete: function() {
                    $(this).text(targetValue); // Establecer el valor actual en la etiqueta <span>
                }
            });
        }
    });
});

/*---------------------------------
    7. Isotope Portfolio Filter      // (Filtro personalizado para la sección Portafolio por las opciones.)
----------------------------------- */

$(window).on('load', function () {
    $(".portfolio-filter").each(function() {
        var e = $(this);
        e.imagesLoaded(function () {
            if ($("html").attr("dir") == 'rtl') {
                var rtlVal = false; // Valor de dirección derecha a izquierda para el diseño RTL
            } else {
                var rtlVal = true; // Valor de dirección izquierda a derecha para el diseño LTR
            }
            var $grid = e.isotope({
                layoutMode: "masonry", // Modo de diseño para el filtrado de la cartera
                originLeft: rtlVal // Alineación del origen de la cuadrícula (izquierda o derecha)
            });
            $(".portfolio-menu").find("a").on("click", function() {
                var filterValue = $(this).attr("data-filter"); // Valor del filtro seleccionado
                return $(".portfolio-menu").find("a").removeClass("active"), $(this).addClass("active"),
                $grid.isotope({
                    filter: filterValue // Filtra los elementos de la cartera según el valor del filtro
                }), !1
            });
        });
    });
});

/*---------------------------------
    8.  Tooltips                     // (Funcionalidad que creal el efecto tooltip. para que se despliegue un cuadro cuando se pasa el cursor por arriba de ciertos elementos.)
----------------------------------- */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) // Selecciona todos los elementos con el atributo 'data-bs-toggle="tooltip"' y los guarda en la variable 'tooltipTriggerList'
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { // Itera sobre cada elemento de 'tooltipTriggerList' y crea un objeto 'Tooltip' para cada uno
  return new bootstrap.Tooltip(tooltipTriggerEl) // Crea un objeto 'Tooltip' para el elemento actual y lo guarda en la variable 'tooltipList'
})

/*--------------------------------
    9.  Scroll to top               // (Crea la funcionalidad para el boton interactivo en la esquina inferior derecha para volver al inicio de la pagina cuando se desplaza fuera de esta seccion)
---------------------------------- */

$(function () {
	$(window).on('scroll', function(){ // Se activa cuando se hace scroll en la ventana
		if ($(this).scrollTop() > 400) { // Comprueba si la posición de desplazamiento vertical es mayor a 400 píxeles desde la parte superior
			$('#back-to-top').fadeIn(); // Muestra el elemento con el ID 'back-to-top'
		} else {
			$('#back-to-top').fadeOut(); // Oculta el elemento con el ID 'back-to-top'
		}
	});
	$('#back-to-top').on("click", function() { // Se activa cuando se hace clic en el elemento con el ID 'back-to-top'
		$('html, body').animate({scrollTop:0}, 'slow'); // Realiza una animación de desplazamiento suave hacia arriba
		return false; // Evita el comportamiento predeterminado del enlace
	});
});

/*--------------------------------
    10. Contact Form                // (Creamos funcionalidad para el envío del formulario por medio de la API Formsubmit, y efectos al boton de envío)
---------------------------------- */

$(document).ready(function() {
    const contactForm = $('#contact-form'); // Capturamos el formulario
    const submitButton = $('#submit-btn');// Capturamos el botón de envío

    contactForm.on('submit', function(e) {  // quitamos el evento por defecto de envío para que no lo envíe directo, antes de nuestra funcion
        e.preventDefault();

    submitButton.html('<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Enviando mensaje...');   // Mostramos el botón con el spinner mientras se envía el mensaje

    submitButton.prop('disabled', true); // Deshabilitamos el botón para evitar envíos múltiples mientras se procesa la solicitud

// Envío del formulario mediante AJAX
    $.ajax({
        type: 'POST',
        url: contactForm.attr('action'),
        data: contactForm.serialize(),
        success: function(response) {

// Envío exitoso
        console.log('Respuesta del servidor:', response);
          submitButton.html('Enviar mensaje'); // Restauramos el texto original del botón
          submitButton.prop('disabled', false); // Habilitamos el botón nuevamente
          contactForm[0].reset(); // Reiniciamos el formulario
        alert('El mensaje se envió correctamente. ¡Gracias por contactarme¡, En breve me estaré comunicando con tigo');
        },
        error: function(jqXHR, textStatus, errorThrown) {

// Envío con error
        console.error('Error en la solicitud AJAX:', textStatus, errorThrown);
        console.log('Respuesta del servidor:', jqXHR.responseText);
          submitButton.html('Enviar mensaje'); // Restauramos el texto original del botón
          submitButton.prop('disabled', false); // Habilitamos el botón nuevamente
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.');
        }
    });
    });
});

})(jQuery)
