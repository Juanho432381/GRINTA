// Swiper principal (Hero Slider)
var heroSwiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on: {
        init: function() {
            // Animación para textos al cargar
            const sliderText = document.querySelector('.slider-text');
            sliderText.classList.add('animate__animated', 'animate__fadeInUp');
        },
        slideChangeTransitionStart: function() {
            // Animación para cada cambio de slide
            const sliderText = document.querySelector('.slider-text');
            sliderText.classList.remove('animate__animated', 'animate__fadeInUp');
            setTimeout(() => {
                sliderText.classList.add('animate__animated', 'animate__fadeInUp');
            }, 100);
        }
    }
});

// Swiper de productos
var productsSwiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    on: {
        init: function() {
            // Efecto hover permanente en slide activo
            const activeSlide = document.querySelector('.mySwiper-2 .swiper-slide-active .producto');
            if(activeSlide) {
                activeSlide.classList.add('active-product');
            }
        },
        slideChange: function() {
            // Actualizar clase active al cambiar slide
            document.querySelectorAll('.mySwiper-2 .producto').forEach(el => {
                el.classList.remove('active-product');
            });
            const activeSlide = document.querySelector('.mySwiper-2 .swiper-slide-active .producto');
            if(activeSlide) {
                activeSlide.classList.add('active-product');
            }
        }
    }
});

// Control de tabs para el swiper de productos
document.querySelectorAll('.tabInput').forEach(tab => {
    tab.addEventListener('change', function() {
        // Reiniciar cada swiper cuando cambias de tab
        const swiperId = this.value;
        const swiperInstance = document.querySelector(`#swiper-${swiperId}-`).swiper;
        swiperInstance.slideTo(0);
        swiperInstance.update();
    });
});