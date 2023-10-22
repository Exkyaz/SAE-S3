$(document).ready(function () {
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});

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