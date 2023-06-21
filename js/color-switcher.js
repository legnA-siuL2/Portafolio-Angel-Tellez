/*
================================================================
* Archivo de funciones para cambio de Color
* Written by: 	 Luis Angel Tellez Rojas
================================================================
*/



document.querySelector(".switcher-toggle").addEventListener("click", function() {
    // Cuando se hace clic en el elemento con la clase "switcher-toggle"
    var leftSwitcher = document.querySelector("#styles-switcher.left");
    var rightSwitcher = document.querySelector("#styles-switcher.right");
    // Selecciona los elementos con los ID "styles-switcher.left" y "styles-switcher.right"

    if (rightSwitcher.style.right === "-202px") {
        // Si la propiedad "right" del estilo de rightSwitcher es igual a "-202px"
        rightSwitcher.style.right = "0px";
        // Establece la propiedad "right" del estilo de rightSwitcher en "0px"
        rightSwitcher.classList.add("shadow");
        // Agrega la clase "shadow" a rightSwitcher
    } else {
        rightSwitcher.style.right = "-202px";
        // De lo contrario, establece la propiedad "right" del estilo de rightSwitcher en "-202px"
        rightSwitcher.classList.remove("shadow");
        // Elimina la clase "shadow" de rightSwitcher
    }

    if (leftSwitcher.style.left === "-202px") {
        // Si la propiedad "left" del estilo de leftSwitcher es igual a "-202px"
        leftSwitcher.style.left = "0px";
        // Establece la propiedad "left" del estilo de leftSwitcher en "0px"
        leftSwitcher.classList.add("shadow");
        // Agrega la clase "shadow" a leftSwitcher
    } else {
        leftSwitcher.style.left = "-202px";
        // De lo contrario, establece la propiedad "left" del estilo de leftSwitcher en "-202px"
        leftSwitcher.classList.remove("shadow");
        // Elimina la clase "shadow" de leftSwitcher
    }
});

var liItems = document.querySelectorAll("#styles-switcher ul li");
// Selecciona todos los elementos <li> dentro de #styles-switcher ul y los guarda en liItems
liItems.forEach(function(li) {
    // Por cada elemento <li> en liItems
    li.addEventListener("click", function() {
        // Cuando se hace clic en el elemento <li>
        var path = this.getAttribute("data-path");
        // Obtiene el valor del atributo "data-path" del elemento <li> actual y lo guarda en path
        document.querySelector("#color-switcher").setAttribute("href", path);
        // Establece el atributo "href" del elemento con el ID "color-switcher" con el valor de path

        liItems.forEach(function(item) {
            // Por cada elemento <li> en liItems
            item.classList.remove("active");
            // Elimina la clase "active" del elemento <li>
        });

        this.classList.add("active");
        // Agrega la clase "active" al elemento <li> actual
    });
});

document.querySelector("#reset-color").addEventListener("click", function() {
    // Cuando se hace clic en el elemento con el ID "reset-color"
    document.querySelector("#color-switcher").removeAttribute("href");
    // Elimina el atributo "href" del elemento con el ID "color-switcher"

    liItems.forEach(function(item) {
        // Por cada elemento <li> en liItems
        item.classList.remove("active");
        // Elimina la clase "active" del elemento <li>
    });
});
