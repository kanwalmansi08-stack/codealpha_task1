const galleryImages = document.querySelectorAll('.gallery-item img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');
const nextBtn = document.getElementById('lightboxNext');
const prevBtn = document.getElementById('lightboxPrev');

let currentIndex = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

// Close button
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Click background to close
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

// Next image
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

// Previous image
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});
/* KEYBOARD CONTROLS */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }

  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage();
  }

  if (e.key === 'ArrowLeft') {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage();
  }
});
/* MOBILE SWIPE SUPPORT */
let startX = 0;
let endX = 0;

lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = endX - startX;

  // minimum swipe distance
  if (Math.abs(swipeDistance) < 50) return;

  if (swipeDistance < 0) {
    // swipe left → next
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage();
  } else {
    // swipe right → previous
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage();
  }
}
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });

  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

