jQuery( document ).ready(function( $ ) {
	"use strict";
        $(function() {
            $( "#tabs" ).tabs();
        });
        // Page loading animation
        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        /* Logo */
        let logo;
        let hasChanged = false;
        let imagenes = [];
        imagenes[0] = "/assets/images/blanco.png";
        imagenes[1] = "/assets/images/azul.png";
        logo = document.getElementById("logo");

        $(window).scroll(function() 
        {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            logo.src = imagenes[1];
            $("header").addClass("background-header");
          } else {
            logo.src = imagenes[0];
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }          

    /*function cambiarImagen(event){
    // Obtener la altura total del documento y la posición de scroll actual
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Calcular el punto medio de la página
        const halfwayPoint = documentHeight / 2;
        
        //alert(scrollTop + " " + windowHeight+ " " + halfwayPoint);  
        // Verificar si el scroll ha llegado a la mitad de la página
        //if (scrollTop + windowHeight >= halfwayPoint)
        if(scrollTop > 50)
        {
            logo.src = imagenes[1];
        } 
        else 
        {
            logo.src = imagenes[0];
        }
    }*/

    /* Carrusel de banners*/
    var posiciones = ["0","-100vw","-200vw"];
    var carrusel = document.querySelector(".Modern-Slider");
    var posicion = 0;
    var tiempo = 3000;
    
    function mover(){
      posicion = posicion+1<=2?posicion+1:0;
      gsap.to(carrusel, { left: posiciones[posicion], duration: 1 });
    }

    if(carrusel)
    {
        setInterval(mover,tiempo);
    }

});

/*

 $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});*/