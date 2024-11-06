const lightbox = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');


const clickableImages = document.querySelectorAll('.clickable');


clickableImages.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImage.src = this.src; 
    });
});

closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

window.addEventListener('click', function(event) {
   if (event.target == lightbox) {
       lightbox.style.display = 'none';
   }
});