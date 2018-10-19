'use strict';

console.log('>> Ready :)');

const seeMoreButtons = document.querySelector('.more-link');
const articles = document.querySelectorAll('.article__container');
console.log(seeMoreButtons);
console.log(articles);

function seeMoreArticles() {
  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.remove('not_mobile');

  }

}
seeMoreButtons.addEventListener('click', seeMoreArticles);