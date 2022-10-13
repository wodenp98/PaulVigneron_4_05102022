    async function getPhotographers() {
        try {
            const response = await fetch("/data/photographers.json")
            const data = await response.json()

            return {photographers: data.photographers}
        } catch (error) {
            console.log(error)
        }
    } 


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer-section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    