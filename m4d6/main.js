const mainCard = document.getElementById("mainCard")
const div = document.createElement("div")
mainCard.style.border = "2px solid yellow"
div.style.width = "16rem"
div.style.margin = "1rem"
const card = document.getElementById("newCard")


const createCard = (data) => {
    
    const addName = document.createElement("h5")
    const addUsername = document.createElement("h5")
    const addEmail = document.createElement("h5")
    addName.innerText = `${data.name}`
    addUsername.innerText = `${data.username}`
    addEmail.innerText = `${data.email}`
    mainCard.append(card)
    card.append(div)
    div.append(addName)
    div.append(addUsername)
    div.append(addEmail)
}


const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}

getData("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res)
    res.map(data => {

        const name = data.name
        const username = data.username
        const email = data.email
        console.log(name)
        console.log(username)
        console.log(email)
        createCard(data)

    })
})


const GetFilteredName = (array, element) => {
    return array.filter(user => user.name.toLowerCase().includes(element.value.toLowerCase()))

}

const GetFiltereUsername = (array, element) => {
    return array.filter(user => user.username.toLowerCase().includes(element.value.toLowerCase()))

}

const GetFilteredEmail = (array, element) => {
    return array.filter(user => user.email.toLowerCase().includes(element.value.toLowerCase()))

}

const buttonSearch = document.getElementById("buttonSearch")
    buttonSearch.addEventListener("click", (e) => {
        e.preventDefault()
        const reSearch = document.getElementById("inputSearch")
        console.log(reSearch.value)
        getData("https://jsonplaceholder.typicode.com/users").then((res) => {
            const filter = GetFilteredName(res, reSearch)
            return filter
        }).then((data) => {
            data.map((singleTitle) => {
                div.innerHTML = ""
                mainCard.innerHTML = ""
                createCard(singleTitle)
            }
            )
        })
    })
    
