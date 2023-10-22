/*Animation slider*/ 
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {

    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );

    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(0%)"; 
      e.target.classList.add("active");
    } 

    else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } 
    
    else if (e.target.classList.contains('third')){
      slides.style.transform = 'translateX(-66.6666666667%)';
      e.target.classList.add('active');
    }

  }
});

/*Card cliquable : redirection */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('click', () => {

        window.location.href = card.getAttribute('data-link');;

    });

});