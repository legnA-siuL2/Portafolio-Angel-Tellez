/*
================================================================
* Template:  	 Portfolio-Angel Tellez Template
* Written by: 	 Luis Angel Tellez Rojas
* Description:   Main Custom Script File
================================================================
*/

//Activa el modo estricto de JavaScript en el ámbito de la función. El modo estricto es una característica de JavaScript que impone restricciones adicionales y proporciona un conjunto más sólido de reglas para el lenguaje
(function ($) {
	"use strict";

// Preloader
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


// Sections Scroll

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


// Mobile Menu

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
   Carousel (Owl Carousel)
----------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
    var owlCarousels = document.querySelectorAll(".owl-carousel");
    owlCarousels.forEach(function(carousel) {
      var options = {
        rtl: false, // Establece la dirección RTL si es necesario
        loop: true, // Habilita o deshabilita el bucle infinito
        margin: parseInt(carousel.dataset.margin), // Establece el margen entre las diapositivas
        responsive: {
          0: { items: parseInt(carousel.dataset.itemsXs) }, // Número de elementos visibles en pantallas extra pequeñas
          576: { items: parseInt(carousel.dataset.itemsSm) }, // Número de elementos visibles en pantallas pequeñas
          768: { items: parseInt(carousel.dataset.itemsMd) }, // Número de elementos visibles en pantallas medianas
          992: { items: parseInt(carousel.dataset.itemsLg) } // Número de elementos visibles en pantallas grandes
        }
      };
      $(carousel).owlCarousel(options);
    });
  });
  


/*------------------------------------
    Magnific Popup
-------------------------------------- */
// Image on Modal
$('.popup-img-gallery').each(function() {
    $(this).magnificPopup({
        delegate: '.popup-img:visible', // Delega el evento a los elementos con la clase 'popup-img' que están visibles dentro del contenedor actual
        type: "image", // Define el tipo de contenido como imagen
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>', // HTML del elemento de carga
        closeOnContentClick: !0, // Habilita el cierre del popup al hacer clic en el contenido
        mainClass: "mfp-fade", // Clase CSS para la animación de entrada y salida
        gallery: {
            enabled: true, // Habilita la funcionalidad de galería
            navigateByImgClick: true, // Permite navegar entre las imágenes al hacer clic en ellas
            preload: [0, 1] // Cantidad de imágenes adyacentes para precargar
        },
    });
});

// Ajax On Modal 
$('.popup-ajax-gallery').each(function() {
    $(this).magnificPopup({
        delegate: '.popup-ajax:visible', // Delega el evento a los elementos con la clase 'popup-ajax' que están visibles dentro del contenedor actual
        type: "ajax", // Define el tipo de contenido como ajax
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>', // HTML del elemento de carga
        mainClass: "mfp-fade", // Clase CSS para la animación de entrada y salida
        closeBtnInside: true, // Habilita el botón de cierre dentro del contenido
        midClick: true, // Habilita el cierre del popup al hacer clic en el área media
        gallery: {
            enabled: true // Habilita la funcionalidad de galería
        },
        callbacks: {
            ajaxContentAdded: function() {
                $(".owl-carousel").each(function (index) {
                    var a = $(this);
                    if ($("html").attr("dir") == 'rtl') {
                        var rtlVal = true; // Valor booleano para la dirección de derecha a izquierda
                    } else {
                        var rtlVal = false; // Valor booleano para la dirección de izquierda a derecha
                    }
                    $(this).owlCarousel({
                        rtl: rtlVal, // Configura la dirección de desplazamiento del carrusel
                        autoplay: a.data('autoplay'), // Habilita la reproducción automática del carrusel
                        center: a.data('center'), // Habilita la alineación centrada de los elementos del carrusel
                        autoplayTimeout: a.data('autoplaytimeout'), // Tiempo de espera entre diapositivas en la reproducción automática
                        autoplayHoverPause: a.data('autoplayhoverpause'), // Pausa la reproducción automática al pasar el cursor sobre el carrusel
                        loop: a.data('loop'), // Habilita el bucle infinito del carrusel
                        speed: a.data('speed'), // Velocidad de desplazamiento del carrusel
                        nav: a.data('nav'), // Habilita los botones de navegación del carrusel
                        dots: a.data('dots'), // Habilita los indicadores de puntos del carrusel
                        autoHeight: a.data('autoheight'), // Ajusta automáticamente la altura de los elementos del carrusel
                        autoWidth: a.data('autowidth'), // Ajusta automáticamente el ancho de los elementos del carrusel
                        margin: a.data('margin'), // Espacio entre los elementos del carrusel
                        stagePadding: a.data('stagepadding'), // Espacio agregado alrededor de los elementos del carrusel
                        slideBy: a.data('slideby'), // Número de elementos que se desplazan en cada transición
                        lazyLoad: a.data('lazyload'), // Carga diferida de las imágenes del carrusel
                        navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], // Texto de los botones de navegación
                        animateOut: a.data('animateOut'), // Animación de salida al cambiar de diapositiva
                        animateIn: a.data('animateIn'), // Animación de entrada al cambiar de diapositiva
                        video: a.data('video'), // Habilita la reproducción de videos en el carrusel
                        items: a.data('items'), // Número de elementos visibles en el carrusel
                        responsive:{
                            0:{items: a.data('items-xs')}, // Número de elementos visibles en dispositivos extra pequeños
                            576:{items: a.data('items-sm')}, // Número de elementos visibles en dispositivos pequeños
                            768:{items: a.data('items-md')}, // Número de elementos visibles en dispositivos medianos
                            992:{items: a.data('items-lg')} // Número de elementos visibles en dispositivos grandes
                        }
                    });
                });
            }
        }
    });
});

// YouTube/Viemo Video & Gmaps
$('.popup-youtube, .popup-vimeo, .popup-gmaps').each(function() {
    $(this).magnificPopup({
        type: 'iframe', // Define el tipo de contenido como iframe
        mainClass: 'mfp-fade', // Clase CSS para la animación de entrada y salida
    });
});

/*------------------------------------
    Isotope Portfolio Filter
-------------------------------------- */
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

/*------------------------------------
    Counter
-------------------------------------- */
$(".counter").each(function () {
    $(this).appear(function () {
        $(this).countTo({
            speed: 1800, // Velocidad de animación para contar hasta el número
        });
    });
});

/*------------------------------------
    Typed
-------------------------------------- */
$(".typed").each(function() {
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings', // Elemento que contiene las cadenas de texto para mostrar
        loop: true, // Habilita la animación en bucle
        typeSpeed: 100, // Velocidad de escritura de cada carácter
        backSpeed: 50, // Velocidad de borrado de cada carácter
        backDelay: 1500, // Retraso después de que se complete la escritura antes de comenzar el borrado
    });
});

/*------------------------------------
    YTPlayer YouTube Background
-------------------------------------- */

$(".player").each(function () {
    $(this).mb_YTPlayer(); // Inicializa el reproductor de video de YouTube en el elemento actual
});

/*------------------------
   tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) // Selecciona todos los elementos con el atributo 'data-bs-toggle="tooltip"' y los guarda en la variable 'tooltipTriggerList'
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { // Itera sobre cada elemento de 'tooltipTriggerList' y crea un objeto 'Tooltip' para cada uno
  return new bootstrap.Tooltip(tooltipTriggerEl) // Crea un objeto 'Tooltip' para el elemento actual y lo guarda en la variable 'tooltipList'
})

/*------------------------
   Scroll to top
-------------------------- */
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

/*------------------------
   Contact Form
-------------------------- */
var form = $('#contact-form'); // Formulario de contacto
var submit = $('#submit-btn'); // Botón de envío

// Evento de envío del formulario
form.on('submit', function (e) {
	e.preventDefault(); // Evita el envío predeterminado del formulario

	if (typeof $('#google-recaptcha-v3').val() != "undefined") { // Comprueba si existe un campo con el ID 'google-recaptcha-v3'
		grecaptcha.ready(function () {
			var site_key = $('#google-recaptcha-v3').attr('src').split("render=")[1]; // Obtiene la clave del sitio del atributo 'src' del campo
			grecaptcha.execute(site_key, {action: 'contact'}).then(function (token) {
				var gdata = form.serialize() + '&g-recaptcha-response=' + token; // Serializa los datos del formulario y agrega el token de reCaptcha
				$.ajax({
					url: 'php/mail.php',  // URL de acción del formulario
					type: 'POST', 		  // Método de envío del formulario (get/post)
					dataType: 'json', 	  // Tipo de datos de la solicitud (html/json/xml)
					data: gdata, 		  // Datos del formulario serializados
					beforeSend: function () {
						submit.attr("disabled", "disabled"); // Deshabilita el botón de envío
						var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // Cambia el texto del botón de envío
						if (submit.html() !== loadingText) {
							submit.data('original-text', submit.html());
							submit.html(loadingText);
						}
					},
					success: function (data) {
						submit.before(data.Message).fadeIn("slow"); // Muestra los datos de respuesta
						submit.html(submit.data('original-text')); // Restaura el texto original del botón de envío
						submit.removeAttr("disabled", "disabled"); // Habilita el botón de envío
						if (data.response == 'success') {
							form.trigger('reset'); // Reinicia el formulario
						}
						setTimeout(function () {
							$('.alert-dismissible').fadeOut('slow', function(){
								$(this).remove();
							});
						}, 3000); // Desvanece el mensaje de alerta después de 3 segundos
					},
					error: function (e) {
						console.log(e); // Muestra el error en la consola
					}
				});
			});
		});
	} else {
		$.ajax({
			url: 'php/mail.php', // URL de acción del formulario
			type: 'POST', // Método de envío del formulario (get/post)
			dataType: 'json', // Tipo de datos de la solicitud (html/json/xml)
			data: form.serialize(), // Datos del formulario serializados
			beforeSend: function () {
				submit.attr("disabled", "disabled"); // Deshabilita el botón de envío
				var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // Cambia el texto del botón de envío
				if (submit.html() !== loadingText) {
					submit.data('original-text', submit.html());
					submit.html(loadingText);
				}
			},
			success: function (data) {
				submit.before(data.Message).fadeIn("slow"); // Muestra los datos de respuesta
				submit.html(submit.data('original-text')); // Restaura el texto original del botón de envío
				submit.removeAttr("disabled", "disabled"); // Habilita el botón de envío
				if (data.response == 'success') {
					form.trigger('reset'); // Reinicia el formulario
				}
				setTimeout(function () {
					$('.alert-dismissible').fadeOut('slow', function(){
						$(this).remove();
					});
				}, 3500); // Desvanece el mensaje de alerta después de 3.5 segundos
				if (typeof $('#recaptcha-v2').val() != "undefined") {
					grecaptcha.reset(); // Reinicia reCaptcha
				}
			},
			error: function (e) {
				console.log(e); // Muestra el error en la consola
			}
		});
	}
});

})(jQuery)