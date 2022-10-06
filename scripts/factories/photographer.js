function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        article.innerHTML = ` <a href="photographer.html?${id}" aria-label="${name}">
                                <img src="assets/photographers/${portrait}" alt="photo de ${name}">
                                <h2>${name}</h2>
                              </a>
                              <h3>${city}, ${country}</h3>
                              <p>${tagline}</p>
                              <p>${price}€/jour</p>        
                            `;
        return article

    }
    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}