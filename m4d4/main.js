const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}


const getBooks = "https://striveschool-api.herokuapp.com/books"
const searchBar = document.getElementById("buttonsearch")

getData(getBooks).then((res) => {
    console.log(res)
    res.map(data => {
        const titles = data.title
        console.log(titles)
        const prices = data.price
        console.log(prices)
        const images = data.img
        console.log(images)
        const asin = data.asin
        console.log(asin)
        createCard(data)

    })
})
const row = document.getElementById("contenitore")
row.classList.add("align-content-center")
const div = document.createElement("div")
div.classList.add("container", "m-1", "d-flex", "flex", "justify-content-between", "flex-wrap")

const createCard = (data) => {
    const immagine = document.createElement("img")
    immagine.classList.add("card-img")
    immagine.src = `${data.img}`
    const divCard = document.createElement("div")
    divCard.classList.add("card", "w-25", "m-2")
    const titoli = document.createElement("h5")
    titoli.innerText = "TITOLO:" + " " + `${data.title}`
    titoli.style.margin = "1em";
    const prezzi = document.createElement("h5")
    prezzi.innerText = "PREZZO:" + " " + `${data.price}` + "€"
    const buttonCard = document.createElement("div")
    buttonCard.classList.add("d-flex", "justify-content-between")
    const btnAsin = document.createElement("a")
    btnAsin.innerText = "Dettagli"
    btnAsin.href = "./singleBook.html"
    const btnAdd = document.createElement("div")
    btnAdd.classList.add("btn", "btn-light")
    btnAdd.innerText = "Add to Cart"
    btnAdd.addEventListener("click", (e) => {
        const cart = document.getElementById("cart")
        const addBadge = document.createElement("span")
        addBadge.classList.add("badge", "badge-secondary")
        addBadge.style.backgroundColor = "green"
        addBadge.innerText = "Added to Cart"
        divCard.appendChild(addBadge)
        const newUl = document.createElement("ul")
        const newLi = document.createElement("li")
        newLi.innerText = `${data.title} ${data.price}` + "€"
        const emptyCart = document.createElement("button")
        emptyCart.classList.add("btn", "btn-light")
        emptyCart.innerText = "Delete Item"
        newLi.style.display = "inline"
        emptyCart.addEventListener("click", e => {
            if( confirm( "Are you sure?")){
                newLi.style.display = "none"
                emptyCart.style.display = "none"
    
            }
           
        })
        cart.append(newUl, emptyCart)
        newUl.appendChild(newLi)

    })
    const btnSkip = document.createElement("div")
    btnSkip.classList.add("btn", "btn-light")
    btnSkip.innerText = "Skip"
    btnSkip.addEventListener("click", (e) => {
        if(confirm("Are you sure?"))
        {        
            divCard.style.display = "none"
    }
    })
    row.append(div)
    div.append(divCard)
    divCard.append(immagine,titoli, prezzi, buttonCard)
    buttonCard.append(btnAdd, btnSkip, btnAsin)


}



const getFilteredData = (array, element) => {
    return array.filter(book => book.title.toLowerCase().includes(element.value.toLowerCase()))
}


searchBar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(row)
    const inputSearch = document.getElementById("searchBar")
    console.log(inputSearch.value)
    getData(getBooks).then((res) => {
        const filter = getFilteredData(res, inputSearch)
        return filter
    }).then((data) => {
        console.log(data)
        data.map((singleBook) => {
            row.innerHTML = ""
            div.innerHTML = ""
            createCard(singleBook)
        })
    })
})