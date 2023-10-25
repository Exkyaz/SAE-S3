const containerMenu = document.querySelector('.container-menu');
const btnMenu = document.querySelector('.btn-menu');


/* Début du Header*/

$(document).ready(function () {
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  $('.menu-btn').click(function () {
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});

/* Fin du Header */


btnMenu.addEventListener('click', () => {
  containerMenu.classList.toggle('active');
});

/*redirections au clic d'un cercle*/
const urls = [
  'http://www.beauvaisis.fr/actualites/actualites-economiques.html',
  'http://www.beauvaisis.fr/actualites/recevoir-la-newsletter.html',
  'http://www.beauvaisis.fr/actualites/flux-rss.html',
  'http://www.beauvaisis.fr/politique-de-la-ville/contrat-de-ville-2023.html'
];

const circles = [
  document.querySelector('.circle-1'),
  document.querySelector('.circle-2'),
  document.querySelector('.circle-3'),
  document.querySelector('.circle-4')
];

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', () => {
    window.open(urls[i], '_blank');
  });
}




const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');
const cultureCategoryPosts = document.querySelectorAll('.culture');
const enssupCategoryPosts = document.querySelectorAll('.enssup');
const environnementCategoryPosts = document.querySelectorAll('.environnement');
const societeCategoryPosts = document.querySelectorAll('.societe');
const aCategoryPosts = document.querySelectorAll('.a');
const bCategoryPosts = document.querySelectorAll('.b');
const postCache = document.querySelectorAll('.MyPostCache');


for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}
function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = "flex";
    }
    else {
      allCategoryPosts[i].style.display = "none";
    }
  }
}
function changeActivePosition(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove('actived');
  }
  activeItem.classList.add('actived');
};


/*document.querySelector("#SpanMoreResults").addEventListener('click', () => Apparition(postCache));*/

/* Début du Footer */

document.getElementById('myFooterFormLink').addEventListener('click', function () {
  myFooterRediriger('http://www.beauvaisis.fr/communaute-agglomeration/nous-contacter.html');
});
document.getElementById('myFooterFacebook').addEventListener('click', function () {
  myFooterRediriger('https://www.facebook.com/beauvaisis/?locale=fr_FR');
});
document.getElementById('myFooterLinkedIn').addEventListener('click', function () {
  myFooterRediriger('https://www.linkedin.com/company/ville-de-beauvais/?originalSubdomain=fr');
});
document.getElementById('myFooterTwitter').addEventListener('click', function () {
  myFooterRediriger('https://twitter.com/agglobeauvaisis');
});
document.getElementById('myFooterBtnEmail').addEventListener('click', function () {
  myFooterRediriger('https://www.beauvaisis.fr/actualites/recevoir-la-newsletter.html');
});

function myFooterRediriger(siteUrl) {
  window.location.href = siteUrl;
}

/* Fin du Footer */


