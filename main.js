function renderPageContent(){
    let customer = customers[0]
    let targetElement = document.querySelector(".card")
    // console.log(targetElement)
    // console.log(customer.cell)

    let cardElement = document.createElement("div");
    cardElement.className = "card";
    // console.log(cardElement)
    let photoElement = document.createElement("img");
    photoElement.innerHTML = `<img src="${customer.picture.thumbnail}">`;
    // console.log (photoElement)


}

renderPageContent()
