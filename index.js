const works = document.querySelector('#works');

// create cards object
const details = {
    card1 : {
        id: 0,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
    card2 : {
        id: 1,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
    card3 : {
        id: 2,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
    card4 : {
        id: 3,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
    card5 : {
        id: 4,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
    card6 : {
        id: 5,
        name:'Multi-Post Stories Gain+Glory',
        decription: 'lorem Ipsum',
        image: 'img/',
        technology:['ruby on rails','css','javascript','html']
    },
};

function popup() {
    
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

function createWorkCardsRow() {
    const workCardsRow = document.createElement('section');
    workCardsRow.setAttribute('class', 'work-cards-row');

    workCardsRow.appendChild(createCard(details.card1));
    workCardsRow.append(createCard(details.card2));
    workCardsRow.append(createCard(details.card3));

    return workCardsRow;
}

function createWorkCardsContainer() {
    const workCards = document.createElement('div');
    workCards.setAttribute('id','work-cards');
    workCards.appendChild(createWorkCardsRow());
    workCards.append(createWorkCardsRow());

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

