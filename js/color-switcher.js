/* Made by
================================================================
* Archivo de funciones para cambio de Color
* Written by: 	 Luis Angel Tellez Rojas
================================================================
*/
document.querySelector(".switcher-toggle").addEventListener("click", function() {
    var leftSwitcher = document.querySelector("#styles-switcher.left");
    var rightSwitcher = document.querySelector("#styles-switcher.right");
    
    if (rightSwitcher.style.right === "-202px") {
        rightSwitcher.style.right = "0px";
        rightSwitcher.classList.add("shadow");
    } else {
        rightSwitcher.style.right = "-202px";
        rightSwitcher.classList.remove("shadow");
    }
    
    if (leftSwitcher.style.left === "-202px") {
        leftSwitcher.style.left = "0px";
        leftSwitcher.classList.add("shadow");
    } else {
        leftSwitcher.style.left = "-202px";
        leftSwitcher.classList.remove("shadow");
    }
});

var liItems = document.querySelectorAll("#styles-switcher ul li");
liItems.forEach(function(li) {
    li.addEventListener("click", function() {
        var path = this.getAttribute("data-path");
        document.querySelector("#color-switcher").setAttribute("href", path);
        liItems.forEach(function(item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

document.querySelector("#reset-color").addEventListener("click", function() {
    document.querySelector("#color-switcher").removeAttribute("href");
    liItems.forEach(function(item) {
        item.classList.remove("active");
    });
});
