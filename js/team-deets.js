        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                dots: true,
                nav: true,
                navText: [
                    '<button class="owl-prev">&#10094;</button>',
                    '<button class="owl-next">&#10095;</button>'
                ]
            });
        });
