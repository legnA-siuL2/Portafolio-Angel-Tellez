/*
================================================================
* Archivo de funciones para cambio de Color
* Written by: 	 Luis Angel Tellez Rojas
================================================================
*/



(function() {
    "use strict";

    // Función para animar una propiedad CSS de un elemento a un valor específico durante un tiempo determinado
    function animateElement(element, property, value, duration, callback) {
        var start = new Date().getTime(); // Tiempo inicial de la animación
        var initialValue = parseInt(getComputedStyle(element)[property], 10); // Valor inicial de la propiedad CSS
        var delta = value - initialValue; // Diferencia entre el valor final y el inicial

        function step() {
            var progress = Math.min((new Date().getTime() - start) / duration, 1); // Progreso de la animación (entre 0 y 1)
            element.style[property] = (initialValue + delta * progress) + "px"; // Calcula el valor interpolado en base al progreso

            if (progress < 1) {
                requestAnimationFrame(step); // Si la animación no ha terminado, solicita el siguiente cuadro de animación
            } else if (callback) {
                callback(); // Si se proporciona una función de devolución de llamada, se invoca una vez que la animación ha terminado
            }
        }

        requestAnimationFrame(step); // Inicia la animación solicitando el primer cuadro de animación
    }

    var switcherToggle = document.querySelector(".switcher-toggle"); // Obtiene el elemento con la clase "switcher-toggle"
    switcherToggle.addEventListener("click", function() {
        var stylesSwitcherLeft = document.getElementById("styles-switcher").querySelector(".left"); // Obtiene el elemento con el ID "styles-switcher" y clase "left"
        var stylesSwitcherRight = document.getElementById("styles-switcher").querySelector(".right"); // Obtiene el elemento con el ID "styles-switcher" y clase "right"

        if (getComputedStyle(stylesSwitcherRight).right === "-202px") {
            // Si la propiedad CSS "right" del elemento stylesSwitcherRight es igual a "-202px"
            animateElement(stylesSwitcherRight, "right", 0, 300, function() {
                // Anima el elemento stylesSwitcherRight para mostrarlo
                stylesSwitcherRight.classList.add("shadow"); // Agrega la clase "shadow" al elemento stylesSwitcherRight
            });
        } else {
            animateElement(stylesSwitcherRight, "right", -202, 300, function() {
                // Anima el elemento stylesSwitcherRight para ocultarlo
                stylesSwitcherRight.classList.remove("shadow"); // Quita la clase "shadow" al elemento stylesSwitcherRight
            });
        }

        if (getComputedStyle(stylesSwitcherLeft).left === "-202px") {
            // Si la propiedad CSS "left" del elemento stylesSwitcherLeft es igual a "-202px"
            animateElement(stylesSwitcherLeft, "left", 0, 300, function() {
                // Anima el elemento stylesSwitcherLeft para mostrarlo
                stylesSwitcherLeft.classList.add("shadow"); // Agrega la clase "shadow" al elemento stylesSwitcherLeft
            });
        } else {
            animateElement(stylesSwitcherLeft, "left", -202, 300, function() {
                // Anima el elemento stylesSwitcherLeft para ocultarlo
                stylesSwitcherLeft.classList.remove("shadow"); // Quita la clase "shadow" al elemento stylesSwitcherLeft
            });
        }
    });

    var colorSwitcherItems = document.querySelectorAll("#styles-switcher ul li"); // Obtiene todos los elementos li dentro de #styles-switcher ul
    colorSwitcherItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Agrega un controlador de eventos de clic a cada elemento de cambio de color
            var path = this.getAttribute("data-path"); // Obtiene el atributo "data-path" del elemento actual
            document.querySelector("#color-switcher").setAttribute("href", path);
            // Establece el atributo "href" del elemento #color-switcher con el valor del atributo "data-path"

            colorSwitcherItems.forEach(function(item) {
                item.classList.remove("active"); // Quita la clase "active" de todos los elementos de cambio de color
            });

            this.classList.add("active"); // Agrega la clase "active" al elemento de cambio de color actual
        });
    });

    var resetColor = document.querySelector("#reset-color"); // Obtiene el elemento con el ID "reset-color"
    resetColor.addEventListener("click", function() {
        // Agrega un controlador de eventos de clic al botón de restablecimiento de color
        document.querySelector("#color-switcher").removeAttribute("href");
        // Elimina el atributo "href" del elemento #color-switcher para restablecer el color

        colorSwitcherItems.forEach(function(item) {
            item.classList.remove("active"); // Quita la clase "active" de todos los elementos de cambio de color
        });
    });
})();
