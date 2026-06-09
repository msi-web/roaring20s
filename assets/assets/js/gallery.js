// Gallery image data - easily expandable array
const galleryImages = [
  { src: 'Art_Images/circle_bar.png', alt: 'AI Art Image 1' },
  { src: 'Art_Images/Noir_Bar_Long1.png', alt: 'AI Art Image 2' },
  { src: 'Art_Images/image3.png', alt: 'AI Art Image 3' },
  { src: 'Art_Images/image4.png', alt: 'AI Art Image 4' },
  { src: 'Art_Images/image5.png', alt: 'AI Art Image 5' },
  { src: 'Art_Images/image6.png', alt: 'AI Art Image 6' },
  // Add more images here as needed
];

// Initialize gallery
function initGallery() {
  const galleryGrid = document.getElementById('imageGallery');
  
  galleryImages.forEach((image, index) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-6';
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'gallery-item';
    itemDiv.role = 'button';
    itemDiv.tabindex = index;
    itemDiv.setAttribute('data-image-index', index);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    overlay.innerHTML = '<i class="fas fa-search-plus"></i>';
    
    itemDiv.appendChild(img);
    itemDiv.appendChild(overlay);
    colDiv.appendChild(itemDiv);
    galleryGrid.appendChild(colDiv);
    
    // Add click event
    itemDiv.addEventListener('click', () => openLightbox(index));
    itemDiv.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        openLightbox(index);
      }
    });
  });
}

// Open lightbox
function openLightbox(index) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  
  lightboxImage.src = galleryImages[index].src;
  lightboxImage.alt = galleryImages[index].alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
document.getElementById('imageLightbox').addEventListener('click', (e) => {
  if (e.target.id === 'imageLightbox') {
    closeLightbox();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGallery);