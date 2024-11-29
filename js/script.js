var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Owl Carousel
        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        });

        $(document).ready(function(){
            $('.current-opportunities-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 10000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        });        

        //Community Highlights
document.addEventListener('DOMContentLoaded', function() {
    // Automatic scroll for Upcoming Events
    const eventsContainer = document.querySelector('.events-container');
    const eventItems = document.querySelectorAll('.event-item');
    const eventScrollSpeed = 0.2; // Adjust the scroll speed as needed
    let scrollAmount = 0;
    let isScrolling = true;
    let scrollInterval;

    function startScrolling() {
        scrollInterval = setInterval(() => {
            if (scrollAmount >= eventsContainer.scrollHeight - eventsContainer.clientHeight) {
                scrollAmount = 0;
            } else {
                scrollAmount += eventScrollSpeed;
            }
            eventsContainer.scrollTo(0, scrollAmount);
        }, 50);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    startScrolling();

    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            stopScrolling();
            isScrolling = false;
            setTimeout(() => {
                isScrolling = true;
                startScrolling();
            }, 5000); // Resume scrolling after 5 seconds of inactivity
        });
    });

    // Swipe functionality for Community Highlights
});

