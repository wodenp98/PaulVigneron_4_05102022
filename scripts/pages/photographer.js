let url = new URL(window.location.href);
let id = url.searchParams.get("id");


async function getPhotographers() {
    try {
        const response = await fetch("/data/photographers.json")
        const data = await response.json()
        console.log(data.media)
        return { photographers: data.photographers}
    } catch (error) {
        console.log(error)
    }
}

async function getPhotographersId(id) {
    fetch("/data/photographers.json")
    .then(response => response.json())
    .then(data => {
        const  { photographers, medias } = data

        const photographerObject = photographers.find(photographer => photographer.id === parseInt(id))
        const mediaObject = medias.filter(media => media.photographerId === parseInt(id))

        return [photographerObject, mediaObject]
    })
}

getPhotographersId(id)


