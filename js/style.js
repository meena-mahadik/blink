
$(document).ready(function () {
    $(window).on('resize', function () { location.reload(); });


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


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 2,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        vertical: true,
        focusOnSelect: true,
        // verticalSwiping:true,
        infinite: false,
        responsive: [
            // {
            //     breakpoint: 992,
            //     settings: {
            //         vertical: false,
            //         dots: false,
            //     }
            // },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         dots: true,
            //         vertical: false,
            //     }
            // },
            // {
            //     breakpoint: 580,
            //     settings: {
            //         dots: true,
            //         vertical: false,
            //     }
            // }
        ]
    });



    // fixed header
    var lastScrollTop = 0;
    $(window).scroll(function (event) {

        let st = $(this).scrollTop();
        let headerHeight = $('.sticky').height();
        if (st < lastScrollTop) {
            // Scrolling up
            $('.sticky').addClass('fixed');
            $('.banner, .subcategories').css('margin-top', headerHeight);


        } else {
            // Scrolling down
            $('.sticky').removeClass('fixed');
            $('.banner, .subcategories').css('margin-top', 0);
        }
        lastScrollTop = st;
    });

    // toggle search bar
    if ($(window).width() < 1024) {
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
            $('body').removeClass('search-opening');
            $('.search-autocomplete').css('display', 'none');
            event.stopPropagation();
        });

        $('#searchBox').click('input', function () {
            $('body').addClass('search-opening');
            $('.search-autocomplete').css('display', 'flex');
        });



    }
    if ($(window).width() < 420) {
        $('#refindButton').on('click', function () {
            $('.left-search-filter').css('display', 'block')
            $('.left-search-filter').addClass('offcanvas offcanvas-end');
        });

        $('#sortButton').on('click', function () {
            // $('.sort-filter').css('display','block')
            // $('.sort-filter').addClass('offcanvas offcanvas-bottom');
        });
    }


    $('.zoom-img').ezPlus({
        zoomWindowFadeIn: 100,
        zoomWindowFadeOut: 100,
        zoomWindowHeight: 500,
        zoomWindowWidth: 500,
        lensFadeIn: 500,
        lensFadeOut: 500,
    });

    $('input[name="colorOptions"]').on('change', function() {
        var selectedValue = $('input[name="colorOptions"]:checked').val();
        $('#colorVarient').text(selectedValue);
      });

      $('input[name="capacityOptions"]').on('change', function() {
        var selectedValue = $('input[name="capacityOptions"]:checked').val();
        $('#capacity').text(selectedValue);
      });

      


      var counterValue = 0;
      // Update the value in the counter div
      function updateCounter() {
        $('#counter').val(counterValue);     }

      // Plus button click event
      $('#plusBtn').on('click', function() {
        counterValue++;
        updateCounter();
      });

      // Minus button click event
      $('#minusBtn').on('click', function() {
        if (counterValue > 0) {
          counterValue--;
          updateCounter();
        }
      });

})