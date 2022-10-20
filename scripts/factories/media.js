function mediaFactory(data) {
  const { date, id, image, video, likes, photographerId, price, title } = data;

  function getMediaCardDOM(index) {
    const article = document.createElement("article");

    const imageMedia = `<img src="/assets/images/${image}" alt="${title}" class="article-image" data-index="${index}" />`;
    const videoMedia = `<video controls src="/assets/images/${video}" alt="${title}" class="article-image" data-index="${index}" />`;

    article.innerHTML = `<a aria-label="${title}" class="article-link">
                                ${image ? imageMedia : videoMedia}
                             </a>
                             <div class="article-infos">
                                <p class="article-title">${title}</p>
                                <div class="article-likes" aria-label="likes">
                                <span>${likes}</span>
                                 <span class="article-icon empty-heart" >
                                  <i class="fa-regular fa-heart"></i> 
                                 </span>
                                 <span class="article-icon full-heart">
                                  <i class="fa-solid fa-heart"></i> 
                                 </span>
                                </div>   
                            </div>
                            `;
    article.classList.add("article-portfolio");

    return article;
  }
  return {
    date,
    id,
    image,
    video,
    likes,
    photographerId,
    price,
    title,
    getMediaCardDOM,
  };
}
