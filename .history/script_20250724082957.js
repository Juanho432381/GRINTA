// Asegúrate de que la librería Swiper esté incluida antes de este script
// Por ejemplo, agrega esto en tu HTML antes de script.js:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
// <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

// Configuración para el Slider Principal (Hamburguesas grandes)
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 0,  // Cambiado a 0 para mejor visualización
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Efecto de desvanecimiento (opcional)
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Configuración para el Slider de Productos
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {  // Para móviles
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {  // Para tablets
            slidesPerView: 2,
            spaceBetween: 25
        },
        1024: {  // Para desktop
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Control de tabs para cambiar entre categorías
document.querySelectorAll('.tabInput').forEach(tab => {
    tab.addEventListener('change', function() {
        // Espera un momento para permitir que se muestre el tab correcto
        setTimeout(() => {
            swiper.update();  // Actualiza el swiper
            swiper.slideTo(0);  // Vuelve al primer slide
        }, 100);
    });
});