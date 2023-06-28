import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector("ul.gallery");
galleryList.insertAdjacentHTML("beforeend", createGalleryMarkups(galleryItems));

galleryList.addEventListener("click", imageClick);

function createGalleryMarkups(array) {
  let markupsString = "";
  array.forEach((element) => {
    markupsString += `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
        <img src="${element.preview}"
        data-source="${element.original}" 
        alt="${element.description}"
        class="gallery__image" />
        </a></div>`;
  });
  return markupsString;
}

function imageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" />
`);

  instance.show();

  galleryList.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
