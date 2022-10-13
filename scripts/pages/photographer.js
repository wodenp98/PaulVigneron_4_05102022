async function getPhotographers() {
    try {
        const response = await fetch("/data/photographers.json")
        const data = await response.json()

        return { photographers: data.photographers, medias: data.medias}
    } catch (error) {
        console.log(error)
    }
}

async function getPhotographersId(id) {

        const  { photographers, medias } = await getPhotographers()

        const photographerObject = photographers.find(photographer => photographer.id === parseInt(id))
        const mediaObject = medias.filter(media => media.photographerId === parseInt(id))

        console.log(photographerObject)
        console.log(mediaObject)

        return [photographerObject, mediaObject]
    }


function headerPhotograph(photographer) {
  const photograph = photographerFactory(photographer)
  const photographPresentation = document.querySelector(".photograph-presentation")
  const photographImg = document.querySelector(".photograph-image")
  const photographLikes = document.querySelector(".photograph-likes")
 
  photographPresentation.innerHTML= `<h1>${photograph.name}</h1>
  <h2>${photograph.city}, ${photograph.country}</h2>
  <p>${photograph.tagline}</p>
  `

  photographImg.setAttribute("src",`/assets/photographers/${photograph.portrait}`);
  
  photographLikes.innerHTML = `<p>${photograph.likes} <i class="fa-sharp fa-solid fa-heart"></i></p>
  <p>${photograph.price}€ / jour</p>`
} 

function displayMedia(medias) {
    const mediasSection = document.querySelector(".photograph-medias");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
};

async function initPhotograph() {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("id");

    const [photographerObject, mediaObject] = await getPhotographersId(id)
    headerPhotograph(photographerObject)
    displayMedia(mediaObject)
};

initPhotograph();

