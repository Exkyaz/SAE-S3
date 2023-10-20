/* Début de Tourisme */

document.getElementById('myTourismPageAddressBtn').addEventListener('click', function() {
    myTourismRediriger('https://www.visitbeauvais.fr/');
});
document.getElementById('myTourismPageAirportBtn').addEventListener('click', function() {
    myTourismRediriger('https://www.aeroportparisbeauvais.com/');
});

function myTourismRediriger(siteUrl) {
    window.location.href = siteUrl;
}

const myBtns = document.querySelectorAll('.myTourismBtn');
const myPages = document.querySelectorAll('.myTourismPage');

for(let i = 0; i < myBtns.length; i++){
    myBtns[i].addEventListener('click', function () { myTourismChangerOnglet(myBtns[i]) });
    if (i == 0) { 
        myBtns[i].style.backgroundColor = "#B04444";
        myPages[i].style.display = "flex"
    } else { 
        myPages[i].style.display = "none";
    }
}

function myTourismChangerOnglet(myBtn) {
    for (let i = 0; i < myPages.length; i++) {
        if (myPages[i].classList.contains(myBtn.id)) { 
            myBtn.style.backgroundColor = "#B04444";
            myPages[i].style.display = "flex"; 
        } else { 
            myBtns[i].style.backgroundColor = "#0F6F9C";
            myPages[i].style.display = "none"; 
        }
    }
}

/* Fin de Tourisme */

/* Début du Footer */

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

function myFooterRediriger(siteUrl) {
    window.location.href = siteUrl;
}

/* Fin du Footer */