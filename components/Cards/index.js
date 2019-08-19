// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



const ArticleCards = (headline, authorPhoto, authorName) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const mainHeadline = document.createElement('div');
    mainHeadline.classList.add('headline');
    mainHeadline.textContent = headline;
    card.appendChild(mainHeadline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = authorPhoto;
    imgContainer.appendChild(img);

    const name = document.createElement('span');
    name.textContent = authorName;
    author.appendChild(name);

    return card;
}
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        response.data.articles['javascript'].forEach((item) => {
            let newCard = ArticleCards(item.headline, item.authorPhoto, item.authorName)
            cardsContainer.appendChild(newCard)
        })
        response.data.articles['bootstrap'].forEach((article) => {
            let newCard = ArticleCards(article.headline, article.authorPhoto, article.authorName)
            cardsContainer.appendChild(newCard)
        })
        response.data.articles['technology'].forEach((article) => {
            let newCard = ArticleCards(article.headline, article.authorPhoto, article.authorName)
            cardsContainer.appendChild(newCard)
        })
        response.data.articles['jquery'].forEach((article) => {
            let newCard = ArticleCards(article.headline, article.authorPhoto, article.authorName)
            cardsContainer.appendChild(newCard)
        })
        response.data.articles['node'].forEach((article) => {
            let newCard = ArticleCards(article.headline, article.authorPhoto, article.authorName)
            cardsContainer.appendChild(newCard)
        })
    })