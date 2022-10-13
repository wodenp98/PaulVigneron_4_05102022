function mediaFactory(data) {
    const {  date, id, image, video, likes, photographerId, price, title  } = data;

    function getMediaCardDOM() {
        const article = document.createElement("article");


        // function isVideo() {
        //     const video = document.createElement("video").setAttribute("src", `/assets/images/${video}`)
        //     return video
        // }

        // isVideo()

        // function isImage() {
        //     const img = document.createElement("img").setAttribute("src", `/assets/images/${image}`)
        //     return img
        // }
        // isImage()

        article.innerHTML = `<p class="image-title">${title}</p>
                            <span class="likes-number" aria-label="likes">${likes}</span>
                            `;
        return article;
    }
    return { date, id, image, video, likes, photographerId, price, title, getMediaCardDOM }
}


