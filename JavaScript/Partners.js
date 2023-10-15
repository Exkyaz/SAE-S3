const text1_options = [
  "A Lire : <ul class = MyulPartners><li><a class = \"MyLinkPartners\" href =http://www.beauvais.fr/actualites/3213-la-flamme-olympique-brillera-a-beauvais-le-18-juillet-2024.html>La flamme olympique brillera à Beauvais le 18 juillet 2024</a></li><li><a class = \"MyLinkPartners\" href =http://www.beauvais.fr/economie-emploi/offres-d-emploi-de-la-mairie.html>Les offres d'emploi de la Ville de Beauvais et de l'Agglo</a></li><li><a class = \"MyLinkPartners\" href =http://www.beauvais.fr/actualites/prochainement-a-beauvais/3305-halloween-monstrueusement-amusant.html>Halloween, monstrueusement amusant - samedi 28 octobre 2023</a></li><li><a class = \"MyLinkPartners\" href =http://www.beauvais.fr/actualites/3192-le-projet-du-groupe-scolaire-samuel-paty-se-dessine.html>Le projet du groupe scolaire Samuel Paty se dessine</a></li></ul>",
  "A Lire 2 : Qu'est-ce qu'un Schéma Directeur Cyclable ? Le Schéma Directeur Cyclable est un document de planification définissant la politique cyclable d'un territoire. Il comporte une partie de diagnostic de la situation actuelle et une seconde partie de propositions visant à développer la pratique du vélo au quotidien (aménagements et itinéraires cyclables, stationnement, services, etc.).",
  "<h1>Is life actually real?</h1>",
];
const text2_options = [
  "1/3",
  "3/3",
  "2/3",
];
const color_options = ["#0F6F9C", "#0F6F9C", "#0F6F9C"];
const image_options = [
  "Images/Logo-Beauvais.fr-Ville.jfif",
  "http://www.beauvaisis.fr/images/homepage/home4/2309-concertation-velo.jpg",
  "Images/LeMag.jpg",
];
var i = 0;
const currentOptionText1 = document.getElementById("MyCurrent-option-text1Partners");
const currentOptionText2 = document.getElementById("MyCurrent-option-text2Partners");
const currentOptionImage = document.getElementById("MyImagePartners");
const carousel = document.getElementById("MyCarousel-wrapperPartners");
const mainMenu = document.getElementById("MyMenuPartners");
const optionPrevious = document.getElementById("MyPrevious-optionPartners");
const optionNext = document.getElementById("MyNext-optionPartners");

currentOptionText1.innerHTML = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerHTML = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  /*currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];*/

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerHTML = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};