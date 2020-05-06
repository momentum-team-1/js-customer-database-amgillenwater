function renderPageContent(){
    let customer = customers[0]
    let targetElement = document.querySelector(".container")
    // console.log(targetElement)
    // console.log(customer.cell)

    let cardElement = document.createElement("div");
    cardElement.className = "card";
    targetElement.appendChild(cardElement);
    // console.log(cardElement)
    let photoElement = document.createElement("div");
    photoElement.className = "photo"
    photoElement.innerHTML = `<img src="${customer.picture.thumbnail}">`;
    targetElement.appendChild(photoElement);
    console.log (photoElement)
    let infoElement = document.createElement("div")
    infoElement.className = "info";



}

renderPageContent()
