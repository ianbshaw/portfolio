(function ($) {
  "use strict";

jQuery(document).ready(function($){
  
        /* menu active start */
        var menuActive = '#menu-bar li';
        $(document).on('click',menuActive,function(){
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        });
        /* menu active start*/
        /*--particles effect  start--*/
        particlesJS('particles-js',
          {
            "particles": {
              "number": {
                "value": 300,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#ddd"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "config_demo": {
              "hide_card": false,
              "background_color": "#b61924",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
            }
          }

        );
    /*--particles effect  start--*/
    
    /*--wow js activation start --*/
        new WOW().init();
    /*--wow js activation start --*/
    
        /*--project counter activation start--*/
        var Counter = $('.counter')
        Counter.counterUp({
                delay: 100,
                time: 1000
            });
    /*--project counter activation end--*/
    
        /*--slick Nav Responsive Navbar activation start--*/
         var slicMenu = $('#menu-bar');
             slicMenu.slicknav();
        /*--scroll to top activation--*/
            var scTop = '.scroll-to-top a'
        $(document).on('click', scTop, function (e) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            }, 3000);
        });
        /*--slick Nav Responsive Navbar activation end--*/
    
        /*--progressing bar activation start--*/
            var php = $('#php');
        php.LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#1abc9c',
            height: '10px',
            radius: '15px'
        });
        var laravel = $('#laravel');    
        laravel.LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#1abc9c',
            height: '10px',
            radius: '15px'
        });
        var codeigniter= $('#codeigniter');
        codeigniter.LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#1abc9c',
            height: '10px',
            radius: '15px'
        });
        var wordPress= $('#wordpress');
        wordPress.LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#1abc9c',
            height: '10px',
            radius: '15px'
        });
        
        /*--progressing bar activation end--*/
    
        /*--isotope actiovation with masonry start--*/  
        var Container =$('.container'); 
            Container.imagesLoaded( function() {
                 var $portfolio = $('.portfolio-masonry').isotope({
                  itemSelector: '.portfolio-item',
                  percentPosition: true,
                  masonry: {
                    columnWidth: '.psize'
                  },
                });
                $(document).on( 'click','.portfolio-menu ul li', function() {
                      var filterValue = $(this).attr('data-filter');
                      $portfolio.isotope({ filter: filterValue });
                    });
            });
         /*--isotope actiovation with masonry end--*/ 
    
        /*--portfolio filter menu active selector start--*/
        var portfolioMenu = '.portfolio-menu ul li';
        $(document).on('click',portfolioMenu,function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    /*--portfolio filter menu active selector end--*/
    
        /*--testimonial carousel slider activation start--*/
        var testimonialCarousel = $('.testimonial-carousel');
        testimonialCarousel.owlCarousel({
            center:true,
            loop:true,
            dots:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 1
              },
              960 : {
                  items: 1
              },
              1200 : {
                  items: 3
              },
              1920 : {
                  items: 3
              }
            }
        });     
/*--testimonial carousel slider activation end--*/
    
        /*--magnific popup Image Activation start--*/
        var imgPopUp =$('.image-popup')
        imgPopUp.magnificPopup({
          type: 'image'
        });
    /*--magnific popup Image Activation end--*/
    
    
        /*-- Headertyping effect activatioin start--*/
        var typed = new Typed('.htitle', {
          strings: ["Dev <span>Robin</span>",'FULL <span>STACK</span>','WEB <span>DEVELOPER.</span>'],
          typeSpeed: 50,
          backSpeed: 60,
          smartBackspace: false,
          loop:true,
          showCursor: false, 
        });
    /*-- Headertyping effect activatioin end--*/

});
    
    
        $(window).on('scroll', function () {
           
            /*--sticky menu activation start--*/
            var maniNavbar = $('.main-navar');
            var mobileLogo = $('.mobile-logo')
            if ($(window).scrollTop() > 300) {
                maniNavbar.addClass('nav-fixed');
                mobileLogo.addClass('active');
            } else {
                maniNavbar.removeClass('nav-fixed');
                mobileLogo.removeClass('active');
            }
            /*--sticky menu activation end--*/
            
            /*--show and hide scroll to top start--*/ 
            var scrollToTop = $('.scroll-to-top a')
            if ($(window).scrollTop() > 500) {
                scrollToTop.fadeIn(1000);
            } else {
                scrollToTop.fadeOut(1000);
            }
            /*--show and hide scroll to top end--*/
            
            });

    
    jQuery(window).load(function(){
        /*--Set preloader start--*/
        var PreLoader = $(".pre-loader");
        PreLoader.fadeOut(500);
        /*--Set preloader end--*/
    });


}(jQuery)); 