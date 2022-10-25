// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  function getUserCardDOM() {
    const article = document.createElement("article");

    article.innerHTML = ` <a href="photographer.html?id=${id}" class="photographer-link" aria-label="${name}">
                                <img src="/assets/photographers/${portrait}" class="photographer-portrait"  alt="${name}">
                                <h2 class="photographer-name">${name}</h2>
                              </a>
                              <h3 class="photographer-country">${city}, ${country}</h3>
                              <p class="photographer-tagline">${tagline}</p>
                              <p class="photographer-price">${price}€/jour</p>        
                            `;
    return article;
  }
  return { name, id, city, country, tagline, price, portrait, getUserCardDOM };
}
