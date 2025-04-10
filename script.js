document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("clientLoginForm");
    const contactForm = document.getElementById("contactForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("clientEmail").value;
        const password = document.getElementById("clientPassword").value;
        if (email === "raj@gmail.com" && password === "hello123") {
          window.location.href = "client.html";
        } else {
          alert("Invalid credentials. Try raj@gmail.com / hello123");
        }
      });
    }
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent successfully!");
        contactForm.reset();
      });
    }
  
    // Counter animation
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  
    // Image modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const close = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll(".portfolio-item img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
      });
    });
  
    close.onclick = function () {
      modal.style.display = "none";
    };
  
    // Dark mode toggle
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  
    // AOS animations
    AOS.init({ duration: 1000, once: true });
  });
  