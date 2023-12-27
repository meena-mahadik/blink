

$(document).ready(function () {

    function registerServiceWorker() {

        if ('serviceWorker' in navigator) {

            setTimeout(() => {
                navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(registration => console.log('Service Worker registered with scope:', registration.scope))
                .catch(error => console.error('Service Worker registration failed:', error));
            }, 3000);
            
        } else {
            console.log('not supported')
        }
    }

     registerServiceWorker();

    // $(window).on('resize', function () { location.reload(); });
    function imageMagnify() {
        let magnifyHeight = $(window).height() - 200;
        let magnifyWidth = $('.product-info').width()
        $("#zoomImg").ezPlus({
            zoomWindowFadeIn: 100,
            oomWindowHeight: 1000,
            zoomWindowWidth: magnifyWidth,
            zoomWindowFadeOut: 100,
            zlensFadeIn: 500,
            lensFadeOut: 500,
            minZoomLevel: 2,
            imageCrossfade: true,
            loadingIcon: "assets/img/spinner.gif",
            cursor: 'crosshair'
        });
    }

    // carousel  
    $('.as').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });

    if ($(window).width() >= 768) {

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            dots: false,
            infinite: false,
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            vertical: true,
            focusOnSelect: true,
            verticalSwiping: true,
            infinite: false,
        });

        $('.slider-nav').on('click', function (event, slick, currentSlide, nextSlide) {
            $(".slider-for .slick-slide img").attr('id', '');
            $('.slider-for .slick-current img').attr('id', 'zoomImg');
            //on click of thumbnail zoom image should change
            imageMagnify();
        });


        imageMagnify();



    }

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(windowWidth)
    if ($(window).width() <= 768) {
        $('.product-detail-slider').slick({
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        });
    }



    if ($(window).width() <= 768) {
        $('#slickVertical').removeClass('slick-vertical');
        $('.slider-nav').hide();

        $('#slickVertical .off-fullscreen').on('click', function (e) {
            $('#slickVertical').removeClass('slider-full-screen');
            $('body').removeClass('offbody-scroll');
        });
        $('#slickVertical .slider-banner-image img').on('click', function (e) {
            if (!$('#slickVertical').hasClass('slider-full-screen')) {
                $('#slickVertical').addClass('slider-full-screen');
                $('body').addClass('offbody-scroll');
            }
        });

    }






    var lastScrollTop = 0;
    $(window).scroll(function () {
        // fixed header
        let st = $(this).scrollTop();
        let headerHeight = $('.sticky').height();
        if (st < lastScrollTop) {
            // Scrolling up
            $('.sticky').addClass('fixed');
            $('.banner, .subcategories').css('margin-top', headerHeight);
            $('.thumbnail-slider').css('top', 150);
            $('.product-form_quantity').css('top', '110px');
        } else {
            // Scrolling down
            $('.sticky').removeClass('fixed');
            $('.banner, .subcategories').css('margin-top', 0);
            $('.thumbnail-slider').css('top', 10);
            $('.product-form_quantity').css('top', '0');
        }

        lastScrollTop = st;

        // fixed Add to card on PDP page
        var addToCardOffset = $('.product-form_quantity').offset().top;
        if (lastScrollTop > 700 && $(window).width() >= 768) {
            $('.product-form_quantity').addClass('addToCard-sticky');
        } else {
            $('.product-form_quantity').removeClass('addToCard-sticky');
        }

        // For Mobile devices
        if (lastScrollTop > 700 && $(window).width() < 768) {
            $('.add-card-small-device').addClass('add-card-small-device-fixed');
        } else {
            $('.add-card-small-device                       ').removeClass('add-card-small-device-fixed');
        }

    });

    $(window).on('touchmove', function () {      
        let st = $(this).scrollTop();
        let headerHeight = $('.sticky').height();
        if (st < lastScrollTop) {
            // Scrolling up
            $('.sticky').addClass('fixed');
            $('.banner, .subcategories').css('margin-top', headerHeight);
            $('.thumbnail-slider').css('top', 150);
            $('.product-form_quantity').css('top', '110px');
        } else {
            // Scrolling down
            $('.sticky').removeClass('fixed');
            $('.banner, .subcategories').css('margin-top', 0);
            $('.thumbnail-slider').css('top', 10);
            $('.product-form_quantity').css('top', '0');
        }

        lastScrollTop = st;

        // fixed Add to card on PDP page
        var addToCardOffset = $('.product-form_quantity').offset().top;
        if (lastScrollTop > 700) {
            $('.product-form_quantity').addClass('addToCard-sticky');
        } else {
            $('.product-form_quantity').removeClass('addToCard-sticky');
        }
    });



    //     if (!$('.product-form_quantity').is(':visible')){
    //         $('.product-form_quantity').addClass("sticky");
    //    }

    // toggle search bar
    if ($(window).width() <= 768) {
        $('#searchBox').hide();
        $("#headerAction").click(function () {
            $(this).toggleClass('switch-icons');
            $("#searchBox").slideToggle("search-toggle");
            // $("#searchBox").slide
        });
    }

    // Mobile view footer navigation toggle
    $('.section-footer .icon').click(function () {
        $(this).parent().parent().toggleClass('active')
    });


    // filter toggle
    $('.toggle-filter').click(function () {
        $(this).parent('.filter-heading').toggleClass('open');
    });



    // sort by toggle
    // $('.sort-by .seleted-value').click(function (event) {
    //     $(this).parent('.sort-by').toggleClass('open');
    //     event.stopPropagation();
    // });
    $(document).on('click', function () {
        $('.sort-by .seleted-value').parent('.sort-by').removeClass('open');
    });



    $('#searchBox').click('input', function (event) {
        $('.search-autocomplete').css('display', 'flex');
        event.stopPropagation();
    });
    $(document).click('input', function () {
        $('.search-autocomplete').css('display', 'none');
    });



    if ($(window).width() < 767) {

        $('#closeSearch').on('click', function (event) {
            $('body').removeClass('offbody-scroll');
            $('.search-autocomplete').css('display', 'none');
            event.stopPropagation();
        });

        $('#searchBox').click('input', function () {
            $('body').addClass('offbody-scroll');
            $('.search-autocomplete').css('display', 'flex');
        });



    }
    if ($(window).width() <= 430) {
        $('.swatch-container-wrap').addClass('offcanvas offcanvas-bottom');

        $('.left-search-filter').css('display', 'block')
        $('.left-search-filter').addClass('offcanvas offcanvas-end');

        $('.sort-filter').css('display', 'block')
        $('.sort-filter').addClass('offcanvas offcanvas-bottom');

        // $('#refindButton').on('click', function () {
        //     $('.left-search-filter').css('display', 'block')
        //     $('.left-search-filter').addClass('offcanvas offcanvas-end');
        // });

        // $('#sortButton').on('click', function () {
        //     // $('.sort-filter').css('display','block')
        //     // $('.sort-filter').addClass('offcanvas offcanvas-bottom');
        // });  
        // $('#varient').on('click', function () {
        //     $('.swatch-container-wrap').addClass('offcanvas offcanvas-bottom');
        // });       
    }




    $('input[name="colorOptions"]').on('change', function () {
        var selectedValue = $('input[name="colorOptions"]:checked').val();
        $('#colorVarient').text(selectedValue);
    });

    $('input[name="capacityOptions"]').on('change', function () {
        var selectedValue = $('input[name="capacityOptions"]:checked').val();
        $('#capacity').text(selectedValue);
    });




    var counterValue = 0;
    // Update the value in the counter div
    function updateCounter() {
        $('#counter').val(counterValue);
    }
    // Plus button click event
    $('#plusBtn').on('click', function () {
        counterValue++;
        updateCounter();
    });
    // Minus button click event
    $('#minusBtn').on('click', function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });




    // Review gallary functionality start
    $('.review-gallary img').on('click', function () {
        var n = $(this).attr('index');
        currentSlide(n)
        showSlides(n);
        $('body').addClass('offbody-scroll');
        document.getElementById("myModal").style.display = "block";


    })

    $('#closeModal').on('click', function () {
        document.getElementById("myModal").style.display = "none";
        $('body').removeClass('offbody-scroll');
    })


    var slideIndex = 1;
    showSlides(slideIndex);

    $('#prev').on('click', function () {
        let n = slideIndex - 1;
        showSlides(n);
    })

    $('#next').on('click', function () {
        let n = +slideIndex + 1;
        showSlides(n);
    })


    $('#prev').on('swipeleft', function () {
        let n = slideIndex - 1;
        showSlides(n);
    })

    $('#next').on('swiperight', function () {
        let n = slideIndex + 1;
        showSlides(n);
    })




    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        slideIndex = n;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // slides[slideIndex - 1].style.display = "block";
        
    }


    // Review gallary functionality start
})