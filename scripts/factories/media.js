function mediaFactory(data) {
    const {  date, id, image, video, likes, photographerId, price, title  } = data;

    function getMediaCardDOM() {
        const article = document.createElement("article");

        const imageMedia = `<img src="/assets/images/${image}" alt="${title}" />`
        const videoMedia = `<img src="/assets/images/${video}" alt="${title}" />`


        article.innerHTML = `<div>
                                ${image ? imageMedia : videoMedia}
                                <p class="image-title">${title}</p>
                                <span class="likes-number" aria-label="likes">${likes}</span>
                            </div>
                            `;
        return article;
    }
    return { date, id, image, video, likes, photographerId, price, title, getMediaCardDOM }
}


