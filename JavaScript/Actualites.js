var buttonMyAllActus = document.getElementById("MyAllActus");
var buttonMyCultureActus = document.getElementById("MyCultureActus");
var buttonMyEnvironnementActus = document.getElementById("MyEnvironnementActus");
var buttonMyEnseignementActus = document.getElementById("MyEnseignementActus");


const DivMyContentArticlesActusNew = createElement("div", { id: "MyContentArticlesNew" });
document.querySelector('#MyActualitesContener').append(DivMyContentArticlesActusNew);
DivMyContentArticlesActusNew.innerHTML = `<p style = 'color : #FFFFF'> blabla HUFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>`;
            

/*Pour création Culture*/
const DivMyCultureActus1 = createElement("div", { id: "DivMyCultureActus1" });
const DivMyCultureActus2 = createElement("div", { id: "DivMyCultureActus2" });
const DivMyCultureActus3 = createElement("div", { id: "DivMyCultureActus3" });



/* Pour création Environnement */
const DivMyEnvironnementActus1 = createElement("div", { id: "DivMyEnvironnementActus1" });
const DivMyEnvironnementActus2 = createElement("div", { id: "DivMyEnvironnementActus2" });
const DivMyEnvironnementActus3 = createElement("div", { id: "DivMyEnvironnementActus3" });


/* Pour création Enseignement */
const DivMyEnseignementActus1 = createElement("div", { id: "DivMyEnseignementActus1" });
const DivMyEnseignementActus2 = createElement("div", { id: "DivMyEnseignementActus2" });
const DivMyEnseignementActus3 = createElement("div", { id: "DivMyEnseignementActus3" });





function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value)
    }
    return element
}


buttonMyAllActus.addEventListener("click",() => btnAllActusClick())
buttonMyCultureActus.addEventListener("click",() => btnCultureActusClick())
buttonMyEnvironnementActus.addEventListener("click",() => btnEnvironnementActusClick())
buttonMyEnseignementActus.addEventListener("click",() => btnEnseignementActusClick())

function btnAllActusClick(){
    DivMyContentArticlesActusNew.innerHTML = "";
}

function btnCultureActusClick(){
    DivMyContentArticlesActusNew.innerHTML = "";
    document.querySelector('#MyContentArticlesNew').append(DivMyCultureActus1);
    document.querySelector('#MyContentArticlesNew').append(DivMyCultureActus2);
    document.querySelector('#MyContentArticlesNew').append(DivMyCultureActus3);
}

function btnEnvironnementActusClick(){
    DivMyContentArticlesActusNew.innerHTML = "";
    document.querySelector('#MyContentArticlesNew').append(DivMyEnvironnementActus1);
    document.querySelector('#MyContentArticlesNew').append(DivMyEnvironnementActus2);
    document.querySelector('#MyContentArticlesNew').append(DivMyEnvironnementActus3);
}

function btnEnseignementActusClick(){
    DivMyContentArticlesActusNew.innerHTML = "";
    document.querySelector('#MyContentArticlesNew').append(DivMyEnseignementActus1);
    document.querySelector('#MyContentArticlesNew').append(DivMyEnseignementActus2);
    document.querySelector('#MyContentArticlesNew').append(DivMyEnseignementActus3);

}