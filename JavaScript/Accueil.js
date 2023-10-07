const icon = document.querySelector('.icon');
const search = document.querySelector(".searchbar");
icon.onclick = function()  {
    search.classList.toggle('active')
}

/* Agenda */

document.getElementById('myAgendaArticle1').addEventListener('mouseover', function() {
    myAgendaChangerImageBg('Images/Architecture_Patrimoine_Agenda.jpg');
});
document.getElementById('myAgendaArticle2').addEventListener('mouseover', function() {
    myAgendaChangerImageBg('Images/Campagne_Rose_Agenda.jpg');
});
document.getElementById('myAgendaArticle3').addEventListener('mouseover', function() {
    myAgendaChangerImageBg('Images/Reunion_Publique_Agenda.jpg'); 
});

function myAgendaChangerImageBg(imageUrl) {
    document.getElementById('myAgendaBgImage').src = imageUrl;
}

/* Fin Agenda */