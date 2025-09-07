function afficherZoneTexte() {
    let reponse = document.getElementById("reponse").value;
    let zoneTexte = document.getElementById("explicationNon");

    if (reponse === "Non") {
        zoneTexte.style.display = "block";
    } else {
        zoneTexte.style.display = "none";
    }
};

// button autre question 7
document.getElementById("autre").addEventListener("click", () => {
    const zone = document.getElementById("zoneAutre");
    //tooggle affichage
    zone.style.display = (zone.style.display === "none" || zone.style.display === "") ? "block" : "none";
});

function afficherZoneTexte1() {
    let reponse = document.getElementById("reponse1").value;
    let zoneTexte = document.getElementById("explicationNon1");

    if (reponse === "Non") {
        zoneTexte.style.display = "block";
    } else {
        zoneTexte.style.display = "none";
    }
};

function afficherZoneTexte2() {
    let reponse = document.getElementById("reponse2").value;
    let zoneTexte = document.getElementById("explicationNon2");

    if (reponse === "Non") {
        zoneTexte.style.display = "block";
    } else {
        zoneTexte.style.display = "none";
    }
};

function afficherZoneTexte3() {
    let reponse = document.getElementById("reponse3").value;
    let zoneTexte = document.getElementById("explicationOui");

    if (reponse === "Oui") {
        zoneTexte.style.display = "block";
    } else {
        zoneTexte.style.display = "none";
    }
};
//fonction qui mets a jour les liste de la question 7

function updateOptions() {
    const selects = [document.getElementById("select1"), document.getElementById("select2"), document.getElementById("select3")];

    // Collecter les valeurs sélectionnées
    const selectedValues = selects.map(s => s.value);

    selects.forEach(select => {
        const currentValue = select.value;

        // Parcourir toutes les options
        Array.from(select.options).forEach(option => {
            if (option.value === "") return; // ne pas désactiver le choix vide

            // Désactiver si la valeur est déjà choisie ailleurs
            option.disabled = selectedValues.includes(option.value) && option.value !== currentValue;
        });
    });
}

document.getElementById("bouton").addEventListener("click", function() {
    window.location.href = "popup.html";
})

//Popup scrip

alert("Salut, veuillez renseigner le formulaire")