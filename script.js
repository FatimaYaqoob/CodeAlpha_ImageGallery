let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryImages = document.querySelectorAll(".gallery img");
  images = Array.from(galleryImages);
  currentIndex = images.indexOf(imgElement);
  showImage(currentIndex);
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  showImage(currentIndex);
}

function showImage(index) {
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt;
}

// Filtering Function
function filterImages(category) {
  const items = document.querySelectorAll('.image-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

