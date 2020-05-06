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
    let addressElement = document.createElement("div");
        addressElement.className = "address-street";
        addressElement.innerHTML = `${customer.location.street}`;
        cardElement.appendChild(addressElement);
    let addressTwoElement = document.createElement("div");
        addressTwoElement.className = "city-state-zip";
        addressTwoElement.innerHTML = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
        cardElement.appendChild(addressTwoElement);
    let phoneElement = document.createElement("div");
        phoneElement.className = "phone";
        phoneElement.innerHTML = `${customer.phone}`;
        cardElement.appendChild(phoneElement);
    let regDate = document.createElement("div");
        regDate.className = "reg-date";
        regDate.innerHTML=`${customer.registered}`;
        cardElement.appendChild(regDate);
}

renderPageContent()
