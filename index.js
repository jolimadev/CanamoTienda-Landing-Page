document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
}); /*al dar click: el toggle me permite que aparezca o no el menubars*/


/*nos permite dar ese efecto que aparecen las cosas a medida que scrolleamos, el delay es elefecto 
que tarda en aparecer cada elemento de la web, es a gusto de uno, "500ms"*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });