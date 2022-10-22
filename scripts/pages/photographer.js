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

  photographPresentation.innerHTML = `<h1>${photograph.name}</h1>
  <h2>${photograph.city}, ${photograph.country}</h2>
  <p>${photograph.tagline}</p>
  `;

  photographImg.setAttribute(
    "src",
    `/assets/photographers/${photograph.portrait}`
  );

  photographLikes.innerHTML = `<p class="total-likes"></p>
  <p>${photograph.price}€ / jour</p>`;

  contactPhotograph.innerHTML = `Contactez-moi ${photograph.name}`;
}

function displayMedia(medias) {
  const mediasSection = document.querySelector(".photograph-article");

  medias.forEach((media, index) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    mediasSection.appendChild(mediaCardDOM);
  });
}

function filters(medias) {
  const filterSystem = document.getElementById("filter");
  console.log(medias);

  filterSystem.addEventListener("change", (e) => {
    if (e.target.value === "Date") {
      const mediaDate = medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      console.log(mediaDate);
      // medias.forEach((media) => {
      //   const mediaModel = mediaFactory(media);
      //   const mediaCardDOM = mediaModel.getMediaCardDOM(mediaDate);
      //   console.log(mediaCardDOM);
      // });
    }
    if (e.target.value === "Popularité") {
      const mediaLike = medias.sort(function (a, b) {
        return a.likes < b.likes ? 1 : -1;
      });
      console.log(mediaLike);
    }
    if (e.target.value === "Titre") {
      const mediaTitle = medias.sort(function (a, b) {
        return a.title < b.title ? -1 : 1;
      });
      console.log(mediaTitle);
    }
  });
}

async function initPhotograph() {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");

  const [photographerObject, mediaObject] = await getPhotographersId(id);
  headerPhotograph(photographerObject);
  displayMedia(mediaObject);
  filters(mediaObject);
  likesGlobal();
  lightboxGlobal();
}

initPhotograph();
