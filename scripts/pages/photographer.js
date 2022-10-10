let url = new URL(window.location.href);
let id = url.searchParams.get("id");
console.log(id);


async function getPhotographers() {
    try {
        const response = await fetch("/data/photographers.json")
        const data = await response.json()
        console.log(data.photographers)
        return { photographers: data.photographers }
    } catch (error) {
        console.log(error)
    }
}

async function getPhotographersId(id) {
    fetch(`/data/photographers.json`)
    .then(response => response.json())
    .then(data => {
        const  { photographers } = data
        console.log(photographers)
        const photographerObject = photographers.find(photographer => photographer.id === parseInt(id))

        console.log(photographerObject);
    })
}

getPhotographersId(id)


