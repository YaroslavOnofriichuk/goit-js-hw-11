import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector(".country-list"),
    info: document.querySelector(".country-info"),
};

// refs.input.addEventListener("input", debounce(searchCountries, DEBOUNCE_DELAY));

// function searchCountries (e) {
//     if (e.target.value.trim() !== "") {
//         fetchCountries(e.target.value.trim()).then(data => {
//             if (data.length > 10) {
//                 Notify.info("Too many matches found. Please enter a more specific name.");
//                 refs.list.innerHTML = "";
//                 refs.info.innerHTML = "";
//             } else if (data.length >= 2 && data.length <= 10) {
//                 refs.list.innerHTML = createListMarkup(data);
//                 refs.info.innerHTML = "";
//             }  else {
//                 refs.info.innerHTML = createInfoMarkup(data);
//                 refs.list.innerHTML = "";
//             }
//         }).catch((error) => Notify.failure("Oops, there is no country with that name"));
//     }
// };