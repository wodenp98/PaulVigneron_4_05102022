function mediaFactory(data) {
    const {  date, id, image, video, likes, photographerId, price, title  } = data;

    function getMediaCardDOM() {
        const article = document.createElement("article");

        const imageMedia = `<img src="/assets/images/${image}" alt="${title}" class="article-image" />`
        const videoMedia = `<video controls src="/assets/images/${video}" alt="${title}" class="article-image" />`


        article.innerHTML = `<a aria-label="${title}" class="article-link">
                                ${image ? imageMedia : videoMedia}
                             </a>
                             <div class="article-infos">
                                <p class="article-title">${title}</p>
                                <span class="article-likes" aria-label="likes">${likes}<i class="article-icon fa-sharp fa-solid fa-heart"></i></span>
                            </div>
                            `;
        article.classList.add("article-portfolio")
        
        return article;
    }
    return { date, id, image, video, likes, photographerId, price, title, getMediaCardDOM }
}


