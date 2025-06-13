// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gllery");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery", { captionsData: "alt", captionDelay: 250, });

export const createGallery = images => {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}"
    </a>
    <div class="info">
    <p>${likes}</p>
    <p>${views}</p>
    <p>${comments}</p>
    <p>${downloads}</p>
    </div>

    </li>`).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
};
