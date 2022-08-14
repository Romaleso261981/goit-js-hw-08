// Add imports above this line
// import { galleryItems } from './gallery-items';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");

// refs.galleryEl.insertAdjacentHTML("afterbegin", markupHtml);
refs.galleryEl.addEventListener("click", openModal);
console.log(galleryEl);

// var lightbox;

function openModal(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") return;
  const dataSource = e.target.dataset.source;

 lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  
  window.addEventListener("keydown", addEventKay);
}


function addEventKay(e) {
  if (e.code === "Escape") {
    window.removeEventListener('keydown', addEventKay);
  }
}

