const works = document.querySelector('#works');

// create cards object
const details = {
    card1 : {
        id: 0,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'Aenean at lorem purus. Suspendisse vitae libero dui. Phasellus placerat posuere lacus, in auctor diam mollis ac. Duis congue tincidunt ante vel pretium. Suspendisse porttitor ipsum id dolor convallis varius. Donec faucibus neque nec ex rutrum mollis. Nulla sit amet efficitur augue, sit amet tristique ante. Nunc non condimentum dui. Aliquam mattis pharetra magna ut porttitor. Proin suscipit nunc eget massa pharetra, vitae rhoncus purus dictum. Suspendisse vel tellus hendrerit, lacinia ligula vitae, egestas metus. Nunc quis nisi ut metus accumsan rhoncus.',
        image: 'url(\'img/cards-images/cardone.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
    card2 : {
        id: 1,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'Nunc lobortis augue in efficitur porttitor. Cras tincidunt sagittis dapibus. In at erat quis massa pellentesque ullamcorper vitae et lorem. Fusce nisi velit, elementum ut luctus nec, vulputate in tellus. Quisque pulvinar ac ipsum fringilla rhoncus. Nullam bibendum diam ligula, eu venenatis nisi euismod a. Sed tincidunt sit amet lectus eget efficitur.',
        image: 'url(\'img/cards-images/cardtwo.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
    card3 : {
        id: 2,
        name:'Uber App',
        decription: 'Vivamus mattis, arcu at vulputate pellentesque, ante ex gravida risus, et luctus dolor tortor vitae libero. Sed sollicitudin leo id eros vestibulum lacinia. Duis tincidunt, ligula id elementum commodo, nulla nibh fringilla justo, ac hendrerit turpis justo a arcu. Aenean euismod nibh at tellus tincidunt tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac facilisis dui. ',
        image: 'url(\'img/cards-images/cardthree.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
    card4 : {
        id: 3,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'url(\'img/cards-images/cardfour.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
    card5 : {
        id: 4,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'Etiam volutpat lacus non rhoncus porta. Etiam vulputate cursus libero, quis semper odio. Etiam interdum tortor ac orci sagittis, sit amet dictum arcu porta. Proin convallis dui lacus, vitae tincidunt magna finibus id. Sed velit quam, malesuada ut tristique sit amet, suscipit ut ex. In laoreet sed mauris id rhoncus. Pellentesque tempor elementum lorem, eu aliquam ex fringilla non. Fusce mollis commodo sem tempus fermentum.',
        image: 'url(\'img/cards-images/cardfive.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
    card6 : {
        id: 5,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ligula dictum, volutpat ante id, consectetur leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel felis faucibus, gravida mi tincidunt, rhoncus risus. Aenean odio velit, mattis eu diam vel, tincidunt ornare mi. In fermentum metus quam, id dignissim libero accumsan in. Ut condimentum ultricies mollis. Aenean at ante ut magna posuere fringilla.',
        image: 'url(\'img/cards-images/cardsix.jpg\')',
        technology:['ruby on rails','css','javascript','html']
    },
};

function popup(cardN) {
    const container = document.createElement('section');
    const popupCard = document.createElement('div');
    const closeButton = document.createElement('div');
    const popupCardImage = document.createElement('img');
    const titleContainer = document.createElement('section');
    const popupDetailsContainer = document.createElement('div');
    const popupDetailsText = document.createElement('p');
    const popupToolsContainer = document.createElement('div');
    const popupTitleText = document.createElement('h2');
    const titleTextContainer = document.createElement('div');
    const buttonsContainer = document.createElement('div');
    const seeLiveButton = document.createElement('button');
    const seeSourceButton = document.createElement('button');

    container.setAttribute('class','popup-container');
    popupCard.setAttribute('class','popup-card');   
    closeButton.setAttribute('class','close-button');
    popupCardImage.setAttribute('class','popup-card-image');
    popupCardImage.setAttributeNS('src','src', cardN.image);
    titleContainer.setAttribute('class','popup-title-container');
    popupDetailsContainer.setAttribute('class','popup-details-container');
    popupDetailsText.setAttribute('class','popup-details-text');
    popupToolsContainer.setAttribute('class','popup-tools-container');
    titleTextContainer.setAttribute('class','title-text-container');
    popupTitleText.setAttribute('class','popup-title-text');
    buttonsContainer.setAttribute('class','popup-buttons-container');
    seeLiveButton.setAttribute('class','popup-button');
    seeSourceButton.setAttribute('class','popup-button');

    container.appendChild(popupCard);
    popupCard.append(closeButton);
    popupCard.append(popupCardImage);
    popupCard.append(titleContainer);
    popupCard.append(popupToolsContainer);
    popupCard.append(popupDetailsContainer);
    popupDetailsContainer.appendChild(popupDetailsText);
    titleContainer.appendChild(titleTextContainer);
    titleTextContainer.appendChild(popupTitleText);
    titleContainer.append(buttonsContainer);
    buttonsContainer.appendChild(seeLiveButton);
    buttonsContainer.append(seeSourceButton);

    seeLiveButton.textContent = 'See Live';
    seeSourceButton.textContent = 'See Source';
    return container;
}

// Dynamically create the work section
function createCard(cardN) {
    const card = document.createElement('div');
    const cardContent = document.createElement('section');
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = cardN.name;
    const cardTags = document.createElement('ul');
    const tag1 = document.createElement('li');
    const tag2 = document.createElement('li');
    const tag3 = document.createElement('li');
    const tag4 = document.createElement('li');
    const cardTagText1 = document.createElement('p');
    const cardTagText2 = document.createElement('p');
    const cardTagText3 = document.createElement('p');
    const cardTagText4 = document.createElement('p');
    const cardTitleButton = document.createElement('div');
    const cardButton = document.createElement('button');
    const cardButtonText = document.createElement('p');

    card.setAttribute('class', 'card');
    cardContent.setAttribute('class','card-content');
    cardTitle.setAttribute('class','card-title');
    cardTags.setAttribute('class','card-tags');
    tag1.setAttribute('class','card-tag ruby');
    tag2.setAttribute('class','card-tag css');
    tag3.setAttribute('class','card-tag javascript');
    tag4.setAttribute('class','card-tag html');
    cardTagText1.setAttribute('class','card-tag-text');
    cardTagText2.setAttribute('class','card-tag-text');
    cardTagText3.setAttribute('class','card-tag-text');
    cardTagText4.setAttribute('class','card-tag-text');
    cardTitleButton.setAttribute('class','card-title-button');
    cardButton.setAttribute('class','card-button');
    cardButtonText.setAttribute('class','card-button-text');

    tag1.textContent = cardN.technology[0];
    tag2.textContent = cardN.technology[1];
    tag3.textContent = cardN.technology[2];
    tag4.textContent = cardN.technology[3];
    card.style.backgroundImage = cardN.image;
    cardButtonText.textContent = 'See Project'

    card.appendChild(cardContent);
    cardContent.appendChild(cardTitle);
    cardContent.append(cardTags);
    cardContent.append(cardTitleButton);
    cardTitleButton.appendChild(cardButton);
    cardButton.appendChild(cardButtonText);
    cardTags.appendChild(tag1);
    cardTags.append(tag2);
    cardTags.append(tag3);
    cardTags.append(tag4);
    tag1.appendChild(cardTagText1);
    tag2.appendChild(cardTagText2);
    tag3.appendChild(cardTagText3);
    tag4.appendChild(cardTagText4);

    cardButton.addEventListener('click', popup);

    return card;
}

function createWorkCardsRow(one, two, three) {
    const workCardsRow = document.createElement('section');
    workCardsRow.setAttribute('class', 'work-cards-row');

    workCardsRow.appendChild(createCard(one));
    workCardsRow.append(createCard(two));
    workCardsRow.append(createCard(three));

    return workCardsRow;
}

function createWorkCardsContainer() {
    const workCards = document.createElement('div');
    workCards.setAttribute('id','work-cards');
    workCards.appendChild(createWorkCardsRow(details.card1,details.card2,details.card3));
    workCards.append(createWorkCardsRow(details.card4,details.card5, details.card6));

    return workCards;
}

function createWorksTitleContainer() {
    // Create all the Elements
    const worksTitle = document.createElement('div');
    const worksTitleText = document.createElement('h2');
    worksTitleText.textContent = 'My Recent Works'
    const indicator = document.createElement('div');
    
    //Set attributes to all elements
    worksTitle.setAttribute('id','works-title');
    worksTitleText.setAttribute('class','works-title-text');
    indicator.setAttribute('class','indicator');

    //Append elements to parents
    worksTitle.appendChild(worksTitleText);
    worksTitle.append(indicator);

    return worksTitle;
}

window.addEventListener('load',() => {
    works.appendChild(createWorksTitleContainer());
    works.append(createWorkCardsContainer());
});

