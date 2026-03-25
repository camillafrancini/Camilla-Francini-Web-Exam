document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  const nextBtn = document.querySelector(".hero-btn.next");
  const prevBtn = document.querySelector(".hero-btn.prev");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  if (slides.length > 0) {
    showSlide(current);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      current++;
      if (current >= slides.length) {
        current = 0;
      }
      showSlide(current);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      current--;
      if (current < 0) {
        current = slides.length - 1;
      }
      showSlide(current);
    });
  }
});