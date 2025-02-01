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


// Toggle the 'show-header' class when the menu toggle changes
document.getElementById("menu-toggle").addEventListener("change", function () {
  const header = document.querySelector(".header2");
  header.classList.toggle("show-header");

  if (header.classList.contains("show-header")) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = ""; // Enable scrolling
  }
});

// Listen for clicks on the document
document.addEventListener("click", function (event) {
  const header = document.querySelector(".header2");
  const menuToggle = document.getElementById("menu-toggle");
  const menuCheckbox = document.getElementById("menu-checkbox");

  // Check if the click was outside the header and the menu toggle
  if (
    header.classList.contains("show-header") &&
    !header.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    header.classList.remove("show-header");
    document.body.style.overflow = ""; // Enable scrolling

    // Uncheck the menu toggle if it's a checkbox
    if (menuToggle.type === "checkbox") {
      menuToggle.checked = false;
    }

    // Uncheck the menu-checkbox
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }
});


window.addEventListener("scroll", function () {
  let header = document.querySelector(".header1-wrapper");
  if (window.scrollY > 150) { // Change 50 to adjust when the effect starts
      header.style.backgroundColor = "var(--body)";
  } else {
      header.style.backgroundColor = "transparent";
  }
});
