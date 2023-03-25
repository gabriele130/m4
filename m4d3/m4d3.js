//fetch(url,option)
let url = "https://api.pexels.com/v1/search"
let h = {
    "authorization": 'YzFJpGvQ7mXYU0EIwoLiNAwJZsNOb1FOhAkFWDDy0ujYMs7Nc6ao0wRj'
}

function creaCard(src, photographer, id) {

    let div = document.createElement("div")
    div.classList.add("col-md-4")

    let card = document.createElement("div")
    card.classList.add("card", "mb-4", "shadow-sm")

    let img = document.createElement("img")
    img.classList.add("bd-placeholder-img", "card-img-top")
    img.src = src.original

    let cBody = document.createElement("div")
    cBody.classList.add("card-body")

    let p = document.createElement("p")
    p.classList.add("card-text")
    p.innerText = photographer

    let flex = document.createElement("div")
    flex.classList.add("d-flex", "justify-content-between", "align-items-center")

    let group = document.createElement("div")
    group.classList.add("btn-group")

    let btn = document.createElement("button")
    btn.classList.add("btn", "btn-sm", "btn-outline-secondary")
    btn.innerText = "nascondi"
    btn.addEventListener("click", (e)=>{

    })

    let small = document.createElement("small")
    small.classList.add("text-muted")
    small.innerText = id

    group.appendChild(btn)
    flex.append(group, small)
    cBody.append(p, flex)
    card.append(img, cBody)
    div.append(card)

    return div
}



//versione da utilizzare
function searchData(q, p = 1, pp = 10) {
    console.log(q, p, pp)
    let searchQuery = url + "?query=" + q + "&page=" + p + "&per_page" + pp
    let options = {
        method: "GET",
        headers: h
    }
    return fetch(searchQuery, options).then(res => res.json())
}


function getData(p=1) {
    let searchQuery = url + "?query=nature&page="+p+"&per_page=10"
    let options = {
        method: "GET",
        headers: h
    }
    return fetch(searchQuery, options).then(res => res.json())
}

window.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById("load-primary").addEventListener("click", (e) => {
        getData().then(res => {
            console.log(res);
            let mainContent = document.getElementById("mainContent")
            mainContent.innerHTML = ""
            res.photos.forEach((el)=>{
               let c =  creaCard(el)
               mainContent.append(c)
            })
        })

    })
})

document.getElementById("loadBtnSeconday").addEventListener("click", (e) => {
    getData(2).then(res=> {
        console.log(res);
        let mainContent = document.getElementById("mainContent")
        res.photos.forEach((el)=>{
           let c =  creaCard(el)
           mainContent.append(c)
        })
    })

})



