import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("ul.gallery");
galleryList.insertAdjacentHTML("beforeend", createGalleryMarkups(galleryItems));

function createGalleryMarkups(array) {
  let markupsString = "";
  array.forEach((element) => {
    markupsString += `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
        <img src="${element.preview}" 
        alt="${element.description}"
        class="gallery__image" />
        </a></li>`;
  });
  return markupsString;
}

let galleryLightbox = new SimpleLightbox(".gallery a");
galleryLightbox.defaultOptions.captionsData = "alt";
galleryLightbox.defaultOptions.captionDelay = 250;
