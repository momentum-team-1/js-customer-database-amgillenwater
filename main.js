// function renderPageContent(){
//     let customer = customers[0]
//     let targetElement = document.querySelector(".container")
//     // console.log(targetElement)
//     // console.log(customer.cell)

//     let cardElement = document.createElement("div");
//         cardElement.className = "card";
//         targetElement.appendChild(cardElement);
//     // console.log(cardElement)
//     let photoElement = document.createElement("div");
//         photoElement.className = "photo";
//         photoElement.innerHTML = `<img src="${customer.picture.thumbnail}">`;
//         cardElement.appendChild(photoElement);
//     // console.log (photoElement)
//     let infoElement = document.createElement("div")
//         infoElement.className = "info";
//         cardElement.appendChild(infoElement);
//     let nameElement = document.createElement("div")
//         nameElement.className = "name";
//         nameElement.innerHTML = `<h2>${customer.name.first} ${customer.name.last}</h2>`
//     // console.log(nameElement)
//         cardElement.appendChild(nameElement);
//     let addressElement = document.createElement("div");
//         addressElement.className = "address-street";
//         addressElement.innerHTML = `${customer.location.street}`;
//         cardElement.appendChild(addressElement);
//     let addressTwoElement = document.createElement("div");
//         addressTwoElement.className = "city-state-zip";
//         addressTwoElement.innerHTML = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
//         cardElement.appendChild(addressTwoElement);
//     let phoneElement = document.createElement("div");
//         phoneElement.className = "phone";
//         phoneElement.innerHTML = `${customer.phone}`;
//         cardElement.appendChild(phoneElement);
//     let regDate = document.createElement("div");
//         regDate.className = "reg-date";
//         regDate.innerHTML=`${customer.registered}`;
//         cardElement.appendChild(regDate);
// }


function loadAll() {
    let targetElement = document.querySelector(".container")

    for (let individual of customers){
        // console.log(individual);
        let cardElement = document.createElement("div");
        cardElement.className = "card";
        targetElement.appendChild(cardElement);
        // photo:
        let photoElement = document.createElement("div");
        photoElement.className = "photo";
        photoElement.innerHTML = `<img src="${individual.picture.large}">`;
        cardElement.appendChild(photoElement);
        //info div:
        let infoElement = document.createElement("div")
        infoElement.className = "info";
        cardElement.appendChild(infoElement);
        //name:
        let nameElement = document.createElement("div")
        nameElement.className = "name";
        nameElement.innerHTML = `<h2>${individual.name.first} ${individual.name.last}</h2>`
        cardElement.appendChild(nameElement);
        // address line 1
        let addressElement = document.createElement("div");
        addressElement.className = "address-street";
        addressElement.innerHTML = `${individual.location.street}`;
        cardElement.appendChild(addressElement);
        // address line 2:
        let addressTwoElement = document.createElement("div");
        addressTwoElement.className = "city-state-zip";
        addressTwoElement.innerHTML = `${individual.location.city} ${individual.location.state} ${individual.location.postcode}`;
        cardElement.appendChild(addressTwoElement);
        //phone number:
         let phoneElement = document.createElement("div");
        phoneElement.className = "phone";
        phoneElement.innerHTML = `${individual.phone}`;
        cardElement.appendChild(phoneElement);
        //registration date:
        let regDate = document.createElement("div");
        regDate.className = "reg-date";
        regDate.innerHTML=`${moment(individual.registered).format("MMM D, YYYY")}`;
        cardElement.appendChild(regDate);

    }
}

loadAll()