// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
  const { date, id, image, video, likes, photographerId, price, title } = data;

  function getMediaCardDOM(index) {
    const article = document.createElement("article");

    const imageMedia = `<img src="/assets/images/${image}" alt="${title}" class="article-image" tabindex="7" data-index="${index}" />`;
    const videoMedia = `<video controls src="/assets/images/${video}" alt="${title}" class="article-image" tabindex="7" data-index="${index}" />`;

    article.innerHTML = `<a aria-label="${title}" class="article-link" >
                                ${image ? imageMedia : videoMedia}
                             </a>
                             <div class="article-infos">
                                <p class="article-title" tabindex="7">${title}</p>
                                <div class="article-likes" aria-label="likes">
                                <span tabindex="7">${likes}</span>
                                 <span class="article-icon empty-heart" tabindex="7" >
                                  <i class="fa-regular fa-heart"></i> 
                                 </span>
                                 <span class="article-icon full-heart" tabindex="7">
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
