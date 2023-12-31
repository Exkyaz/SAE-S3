const icon = document.querySelector('.icon');
const search = document.querySelector(".searchbar");
icon.onclick = function()  {
    search.classList.toggle('active')
}

document.getElementById("mySearch").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const userInput = this.value.toLowerCase();

        if (userInput.includes("tourisme")) {

            window.location.href = "../Tourisme.html";

        } else if (userInput.includes("enseignement superieur")) {

            window.location.href = "../Superieur.html";

        } else if (userInput.includes("actualites")) {

            window.location.href = "../Actualites.html";

        }
    }
});

window.onload = function() {
    document.getElementById('myAgendaArticle1').addEventListener('mouseover', function() {
        myAgendaChangerImageBg('Images/Architecture_Patrimoine_Agenda.jpg');
    });
    document.getElementById('myAgendaArticle2').addEventListener('mouseover', function() {
        myAgendaChangerImageBg('Images/Campagne_Rose_Agenda.jpg');
    });
    document.getElementById('myAgendaArticle3').addEventListener('mouseover', function() {
        myAgendaChangerImageBg('Images/Reunion_Publique_Agenda.jpg'); 
    });

    document.getElementById('myFooterFormLink').addEventListener('click', function() {
        myFooterRediriger('http://www.beauvaisis.fr/communaute-agglomeration/nous-contacter.html');
    });
    document.getElementById('myFooterFacebook').addEventListener('click', function() {
        myFooterRediriger('https://www.facebook.com/beauvaisis/?locale=fr_FR');
    });
    document.getElementById('myFooterLinkedIn').addEventListener('click', function() {
        myFooterRediriger('https://www.linkedin.com/company/ville-de-beauvais/?originalSubdomain=fr'); 
    });
    document.getElementById('myFooterTwitter').addEventListener('click', function() {
        myFooterRediriger('https://twitter.com/agglobeauvaisis');
    });
    document.getElementById('myFooterBtnEmail').addEventListener('click', function() {
        myFooterRediriger('https://www.beauvaisis.fr/actualites/recevoir-la-newsletter.html');
    });
}

/* Début de l'Agenda */

function myAgendaChangerImageBg(imageUrl) {
    document.getElementById('myAgendaBgImage').src = imageUrl;
}

/* Fin de l'Agenda */

/* Début du Footer */

function myFooterRediriger(siteUrl) {
    window.location.href = siteUrl;
}

/* Fin du Footer */

