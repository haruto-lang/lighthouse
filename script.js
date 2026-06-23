const previewCards = document.querySelectorAll(".preview-card");

previewCards.forEach((card) => {
  const track = card.querySelector(".carousel-track");
  const slides = card.querySelectorAll(".carousel-track img");
  const prevBtn = card.querySelector(".prev");
  const nextBtn = card.querySelector(".next");
  const dotsArea = card.querySelector(".dots");

  let currentIndex = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });

    dotsArea.appendChild(dot);
  });

  const dots = card.querySelectorAll(".dot");

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});
