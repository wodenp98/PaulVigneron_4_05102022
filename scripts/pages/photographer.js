async function getPhotographers() {
    try {
        const response = await fetch("/data/photographers.json")
        console.log(response)
        const data = await response.json()
        console.log(data.photographers)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getPhotographersId (id) {
    let url = new URLSearchParams(window.location.search)
    let id = url.get("id")

    console.log(id)
}
