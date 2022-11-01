/* eslint-disable no-undef */
let medias = [];
async function getPhotographers() {
  try {
    const response = await fetch("/data/photographers.json");
    const data = await response.json();

    return { photographers: data.photographers, medias: data.medias };
  } catch (error) {
    console.log(error);
  }
}

async function getPhotographersId(id) {
  const { photographers, medias } = await getPhotographers();

  const photographerObject = photographers.find(
    (photographer) => photographer.id === parseInt(id)
  );
  const mediaObject = medias.filter(
    (media) => media.photographerId === parseInt(id)
  );

  return [photographerObject, mediaObject];
}

function headerPhotograph(photographer) {
  const photograph = photographerFactory(photographer);
  const photographPresentation = document.querySelector(
    ".photograph-presentation"
  );
  const photographImg = document.querySelector(".photograph-image");
  const photographLikes = document.querySelector(".photograph-likes");
  const contactPhotograph = document.querySelector(".contact-name");

  photographPresentation.innerHTML = `<h1 tabindex="2">${photograph.name}</h1>
  <h2 tabindex="3">${photograph.city}, ${photograph.country}</h2>
  <p tabindex="3">${photograph.tagline}</p>
  `;

  photographImg.setAttribute(
    "src",
    `/assets/photographers/${photograph.portrait}`
  );
  photographImg.setAttribute("alt", `photo de ${photograph.name}`);
  photographImg.setAttribute("tabindex", "3");

  photographLikes.innerHTML = `<p class="total-likes" tabindex="8"></p>
  <p tabindex="8">${photograph.price}€ / jour</p>`;

  contactPhotograph.innerHTML = `Contactez-moi ${photograph.name}`;
}

function displayMedia() {
  const mediasSection = document.querySelector(".photograph-article");
  mediasSection.innerHTML = "";

  medias.forEach((media, index) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    mediasSection.appendChild(mediaCardDOM);
  });
}

function filters() {
  const filterSystem = document.getElementById("filter");
  console.log(medias);

  filterSystem.addEventListener("change", (e) => {
    sortMedia(e.target.value);
    likesGlobal();
    lightboxGlobal();
  });
}

function sortMedia(type) {
  if (type === "Date") {
    const mediaDate = medias.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    displayMedia(mediaDate);
  }
  if (type === "Popularité") {
    const mediaLike = medias.sort(function (a, b) {
      return a.likes < b.likes ? 1 : -1;
    });
    displayMedia(mediaLike);
  }
  if (type === "Titre") {
    const mediaTitle = medias.sort(function (a, b) {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    });
    displayMedia(mediaTitle);
  }
}

async function initPhotograph() {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");

  const [photographerObject, mediaObject] = await getPhotographersId(id);
  medias = mediaObject;
  headerPhotograph(photographerObject);
  displayMedia();
  sortMedia("Popularité");
  filters();
  likesGlobal();
  lightboxGlobal();
}

initPhotograph();
