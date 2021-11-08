let detailsform = document.querySelector('#destination_details_form');

detailsform.addEventListener('submit', handleformsubmit);

function handleformsubmit(event){
    event.preventDefault();

    let destname = event.target.elements['name'].value;
    let destlocation = event.target.elements['location'].value;
    let destphoto = event.target.elements['photo'].value;
    let destdesc = event.target.elements['description'].value;

    for( let i=0; i<detailsform.length; i++){
        detailsform.elements[i].value = "";
    }

    let destCard = createDestinationCard(destname, destlocation, destphoto, destdesc);

    let wishlistcontainer = document.getElementById('destinations_container');

    if (wishlistcontainer.children.length === 0){
        document.getElementById('title').innerHTML = "My Wish List";
    }


    document.querySelector('#destinations_container').appendChild(destCard);
}


function createDestinationCard(name, location, photoURL, description){
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0 ) {
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    let cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    let cardtitle = document.createElement('h3');
    cardtitle.innerText = name;
    cardbody.appendChild(cardtitle);

    let cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardbody.appendChild(cardSubtitle);

    if (description.length !== 0){
        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardbody.appendChild(cardText);
    }

    let cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardbody.appendChild(cardDeleteBtn);

    card.appendChild(cardbody);

    return card;
}

function removeDestination(event){
    let card = event.target.parentElement.parentElement;
    card.remove();
}