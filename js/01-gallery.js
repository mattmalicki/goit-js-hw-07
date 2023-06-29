import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
  const closing = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" />`,
    {
      onClose: (instance) => {
        console.log("hi", instance);
        galleryList.removeEventListener("keydown", closing);
      },
    }
  );

  instance.show();

  galleryList.addEventListener("keydown", closing);
}
