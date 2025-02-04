
//swiper//
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
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1400:{
        slidesPerView: 3.5,
        spaceBetween: 40,
      }
    },
  });
  
//form function//
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


//show-header//
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

//header background//
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header1-wrapper");
  if (window.scrollY > 150) { // Change 50 to adjust when the effect starts
      header.style.backgroundColor = "var(--body)";
  } else {
      header.style.backgroundColor = "transparent";
  }
});


//loader animation//

window.addEventListener("load", function () {

  var loader = document.querySelector(".loader");
  
  // Show loader for 1 second before hiding it
  setTimeout(function () {
    if (loader) {
      loader.classList.add("hidden");
    }

    // Start animations after loader hides
    var tl1 = gsap.timeline({ duration: 0.5 });

    tl1.from(".rays", {
      width: 0,
      opacity: 0,
    });

    tl1.from(".section1 .sparkles-1, .sparkles-2, .grid", {
      height: 0,
      opacity: 0,
    });

    tl1.from(".header1", {
      y: -50,
      opacity: 0,
    });

    tl1.from(".a1", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
    });
  }, 1000); // 1 second delay for loader
});

//section2//

gsap.from(".a2", {
  scrollTrigger: {
    trigger: ".section2",
    markers: false,
    start: "0% 80%",
  },
  x: "-50",
  ease: "power.in",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".a3", {
  scrollTrigger: {
    trigger: ".section2",
    markers: false,
    start: "0% 80%",
  },
  x: "50",
  ease: "power.in",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".a4", {
  scrollTrigger: {
    trigger: ".section2",
    markers: false,
    start: "35% 90%",
    
  },
  y: "60",
  ease: "power.in",
  opacity: 0,
  duration: 0.5,
  stagger:0.2,
});

//section3

gsap.from(".a5", {
  scrollTrigger: {
    trigger: ".section3",
    markers: false,
    start: "20% 90%",
    
  },
  y: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
  stagger:0.4,
});

//work section4//

gsap.from(".a6", {
  scrollTrigger: {
    trigger: ".section4",
    markers: false,
    start: "20% 90%",
    
  },
  x: "-50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
  stagger:0.4,
});

gsap.from(".a7", {
  scrollTrigger: {
    trigger: ".section4",
    markers: false,
    start: "20% 90%",
    
  },
  x: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
  stagger:0.5,
});

//testimonial section//

gsap.from(".a8", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "20% 90%",
    
  },
  x: "-50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

gsap.from(".a9", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "20% 90%",
    
  },
  x: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

gsap.from(".a10", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "30% 90%",
    
  },
  y: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

//faqs section//

gsap.from(".a11", {
  scrollTrigger: {
    trigger: ".section6",
    markers: false,
    start: "20% 90%",
    
  },
  x: "-50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

gsap.from(".a12", {
  scrollTrigger: {
    trigger: ".section6",
    markers: false,
    start: "20% 90%",
    
  },
  x: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

// pricing section//

gsap.from(".a13", {
  scrollTrigger: {
    trigger: ".section7",
    markers: false,
    start: "20% 90%",
    
  },
  x: "-50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

gsap.from(".a14", {
  scrollTrigger: {
    trigger: ".section7",
    markers: false,
    start: "20% 90%",
    
  },
  x: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

gsap.from(".a15", {
  scrollTrigger: {
    trigger: ".section7",
    markers: false,
    start: "30% 90%",
    
  },
  y: "50",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});

//footer//
gsap.from(".footer-bg", {
  scrollTrigger: {
    trigger: ".footer",
    markers: false,
    start: "20% 90%",
    
  },
  height:"0",
  opacity:"0",
  ease: "power.in",
  duration: 0.5,
});