var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    freeMode: false,
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".btns"); // Select all elements with .btns
    const closeBtn = document.querySelector(".ph-x-circle");
    const formContainer = document.querySelector(".form-container");
    const formWrapper = document.querySelector(".form-wrapper");
    const body = document.body;

    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            formContainer.style.display = "block"; // Show the form
            body.style.overflow = "hidden"; // Disable scrolling
        });
    });

    closeBtn.addEventListener("click", function () {
        formContainer.style.display = "none"; // Hide the form
        body.style.overflow = "auto"; // Enable scrolling
    });

    // Hide the form when clicking on .form-container itself
    formWrapper.addEventListener("click", function (event) {
        if (event.target === formWrapper) {
            formContainer.style.display = "none"; // Hide the form
            body.style.overflow = "auto"; // Enable scrolling
        }
    });
});

  // scroll to top //
  document.addEventListener("DOMContentLoaded", function () {
    // Check the window's scroll position on page load and toggle the scale of the "to-top" button
    toggleToTopButton();
  
    // Toggle the scale of the "to-top" button on scroll
    window.addEventListener("scroll", toggleToTopButton);
  
    // Scroll to top when the "to-top" button is clicked
    document.querySelector(".to-top").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top with smooth behavior
    });
  
    // Function to toggle the scale of the "to-top" button
    function toggleToTopButton() {
      const toTopButton = document.querySelector(".to-top");
      if (window.scrollY === 0) {
        toTopButton.style.transform = "scale(0)";
      } else {
        toTopButton.style.transform = "scale(1)";
      }
    }
});


document.getElementById("menu-toggle").addEventListener("change", function () {
  document.querySelector(".header2").classList.toggle("show-header");

  if (document.querySelector(".header2").classList.contains("show-header")) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = ""; // Enable scrolling
  }
});
