const createEl = (type, attributes, ...children) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })
    children.forEach((child) => {
        typeof child === "string"
            ? element.appendChild(document.createTextNode(child)) : element.appendChild(child)
    })
    return element;
}

//metodo FETCH, richiedere dati API
const cardContainer = document.getElementById("cardContainer");
const cardManeskin = document.getElementById("cardManeskin")
const cardMahmood = document.getElementById("cardMahmood")

const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json()
    }
    catch (error) {
        console.log(error)
    }
};


//CREA CARD
const createCard = (data, container) => {
    const card = createEl("div", { class: "card", id: "card" },
        createEl("div", { class: "card-img-top", id: "card-img-top", style: `background-image: url(${data.album.cover})` }),
        createEl("h1", { class: "card-title" }, `${data.title}`),
        createEl("h4", { class: "card-text" }, `${data.artist.name}`)
    )
    container.appendChild(card)
}


//1 pinguini
getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari").then((response) => {
    response.data.slice(0, 6).map((artist) => createCard(artist, cardContainer))
});



//2  maneskin
getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin").then((response) => {
    response.data.slice(0, 6).map((artist) => createCard(artist, cardManeskin))
    console.log(response)
})


//3 mahmood
getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood").then((response) => {
    response.data.slice(0, 6).map((artist) => createCard(artist, cardMahmood))
})
