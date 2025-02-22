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

// Newly addedd Title carousel

document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(document.querySelector("#titleCarousel"), {
      interval: 4000, // Auto-slide every 4 seconds
      wrap: true, // Loop back to the first slide
      pause: "hover", // Pause on hover
    });
  
    // Optional: Manually navigate slides with JavaScript
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
      carousel.prev();
    });
  
    document.querySelector(".carousel-control-next").addEventListener("click", function () {
      carousel.next();
    });
  });
  
// Newly Added Toggling Feature for Speakers Section

// Toggle function for displaying and hiding sections
document.getElementById("toggle-2024").addEventListener("click", function() {
    var speakers2024 = document.getElementById("speakers-2024");
    if (speakers2024.style.display === "none") {
        speakers2024.style.display = "block";
    } else {
        speakers2024.style.display = "none";
    }
});

document.getElementById("toggle-2025").addEventListener("click", function() {
    var speakers2025 = document.getElementById("speakers-2025");
    if (speakers2025.style.display === "none") {
        speakers2025.style.display = "block";
    } else {
        speakers2025.style.display = "none";
    }
});