//slider 
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function showItem(index) {
  carouselItems.style.transform = `translateX(-${index * 100}%)`;
}

function prevItem() {
  if (currentIndex > 0) {
    currentIndex--;
    showItem(currentIndex);
  }
}

function nextItem() {
  if (currentIndex < carouselItems.children.length - 1) {
    currentIndex++;
    showItem(currentIndex);
  }
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);
