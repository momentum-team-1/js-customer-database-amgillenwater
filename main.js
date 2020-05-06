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
        photoElement.className = "photo";
        photoElement.innerHTML = `<img src="${customer.picture.thumbnail}">`;
        cardElement.appendChild(photoElement);
    // console.log (photoElement)
    let infoElement = document.createElement("div")
        infoElement.className = "info";
        cardElement.appendChild(infoElement);
    let nameElement = document.createElement("div")
        nameElement.className = "name";
        nameElement.innerHTML = `${customer.name.first} ${customer.name.last}`
    // console.log(nameElement)
        cardElement.appendChild(nameElement);
    




}

renderPageContent()
