import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            message: "Please enter a search term!",
            position: "topRight",
        });
        return;
    };

showLoader();
clearGallery();

getImagesByQuery(query)
    .then(data => {
        if (!data.hits.length) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            return;
        };
        createGallery(data.hits);
    })
    .catch(() => {
        iziToast.error({
            message: "Oops! Something went wrong. Please try again later.",
            position: "topRight"
        });
    })
    .finally(() => { hideLoader(); });
});
