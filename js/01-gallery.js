import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

galleryItems.forEach((image) => {
  basicLightbox.create(`
    <img src="${image.preview}" alt="${image.description}" class="gallery__item">
`);
});
