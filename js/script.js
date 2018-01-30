// Initialisation du tableau contenant les ouvrages
ouvrages = new Array();
nombreOuvrages = 0;

// Indice des éléments dans le tableau d'un ouvrage
indiceReference = 0;
indiceTitre = 1;
indiceAuteurs = 2;
indiceEditeur = 3;
indiceEdition = 4;
indiceAnnee = 5;
indiceIsbn = 6;
indiceNombreExemplaires = 7;
indiceDisponibilite = 8;
indiceExcluPret = 9;
indiceCommentaires = 10;

// Indices des messages d'erreur dans le tableau des erreurs
referenceNonRenseignee = 0;
referenceLettreRequise = 1;
titreNonRenseigne = 2;
auteursNonRenseignes = 3;
editeurNonRenseigne = 4;
editionNonRenseignee = 5;
editionDoitEtreNombre = 6;
anneeNonRenseignee = 7;
anneeDoitEtreNombre4Chiffres = 8;
isbnNonRenseigne = 9;
isbnDoitEtreNombre = 10;
nombreExemplairesNonRenseigne = 11;
nombreExemplairesDoitEtreNombre = 12;

// Initialisation du tableau des erreurs
tableauErreurs = new Array(
    "Veuillez renseigner la référence.",
    "La référence ne doit contenir que des chiffres ou des lettres non accentuées, dont au moins une lettre.",
    "Veuillez renseigner le titre.",
    "Veuillez renseigner l'auteur.",
    "Veuillez renseigner l'éditeur.",
    "Veuillez renseigner l'édition.",
    "L'édition doit être un nombre.",
    "Veuillez renseigner l'année d'édition.",
    "L'année d'édition doit être un nombre de 4 chiffres.",
    "Veuillez renseigner l'ISBN.",
    "L'ISBN doit être un nombre.",
    "Veuillez renseigner le nombre d'exemplaires.",
    "Le nombre d'exemplaires doit être un nombre.");


// Affiche le message de l'erreur dont le numero est passe en argument
function afficheErreur(numeroErreur)
{
    alert(tableauErreurs[numeroErreur]);
}

// Vérifie que la chaîne ne contient que des chiffres ou des lettres non accentuee A-Z, a-z
// et au moins une lettre
function verifier(reference)
{
    return reference.match(/^[0-9a-zA-Z]*[a-zA-Z][0-9a-zA-Z]*$/);
}

// Affiche le resume de l'ouvrage dans le champ de meme nom
function afficherResume(ouvrage)
{
    var resume = ouvrage[indiceReference] + "\n" +
        ouvrage[indiceTitre] + "\n" +
        ouvrage[indiceAuteurs] + "\n" +
//completer
        ouvrage[indiceEdition] + "\n" +
        ouvrage[indiceAnnee] + "\n" +
        ouvrage[indiceIsbn] + "\n" +
        ouvrage[indiceNombreExemplaires] + "\n";
    var disponibilite = "Non disponible";
    if (ouvrage[indiceDisponibilite])
    {
        disponibilite = "Disponible";
    }
    resume = resume + disponibilite + "\n";
    var excluPret = "Autorisé au prêt";
    if (ouvrage[indiceExcluPret])
    {
        excluPret = "Exclu du prêt";
    }
    resume = resume + excluPret + "\n" + ouvrage[indiceCommentaires];
    document.getElementById(resume).value = resume;
}

// Validation et ajout d'un ouvrage
function validation()
{
    var reference = document.getElementById("reference").value;
    console.log(reference);
    if (reference.length == 0)
    {
    //    aficher l'erreur corespondants
        return afficheErreur(referenceNonRenseignee);
    }

    if (!verifier(reference))
    {
    	return afficheErreur(referenceLettreRequise);
    }

    var titre = document.getElementById("titre").value;
    if (titre.length == 0)
    {
       return afficheErreur(titreNonRenseigne);
    }

    var auteurs = document.getElementById("auteurs").value;
    if (auteurs.length == 0)
    {
    	return afficheErreur(auteursNonRenseignes);
    }

    var editeur = document.getElementById("editeur").value;
    if (editeur.length == 0)
    {
    	return afficheErreur(editeurNonRenseigne);
    }

    var edition = document.getElementById("edition").value;
    if (edition.length == 0)
    {
    	return afficheErreur(editionNonRenseignee);
    }
    if (isNaN(edition))
    {
        return afficheErreur(editionDoitEtreNombre);
    }

    var annee = document.getElementById("annee").value;
    if (annee.length == 0)
    {

        return afficheErreur(anneeNonRenseignee);
    }
    if (isNaN(annee) || annee.length != 4)
    {
        return afficheErreur(anneeDoitEtreNombre4Chiffres);
    }

    var isbn = document.getElementById("isbn").value;
    if (isbn.length == 0)
    {
        return afficheErreur(isbnNonRenseigne);
    }
    if (isNaN(isbn))
    {
        return afficheErreur(isbnDoitEtreNombre);
    }

    var nombreExemplaires = document.getElementById("nombreExemplaires").value;
    if (nombreExemplaires.length == 0)
    {
        return afficheErreur(nombreExemplairesNonRenseigne);
    }
    if (isNaN(nombreExemplaires))
    {
        // Afficher Erreur Correspondante
        return afficheErreur(nombreExemplairesDoitEtreNombre);
    }

    var disponibilite = document.getElementById("disponibilite").checked

    var excluPret = document.getElementById("excluPret").checked

    var commentaires = document.getElementById("commentaires").value;
    // création d'un ouvrage
    var ouvrage = new Array();
    ouvrage[indiceReference] = reference;
    // Completer l'ouvrage

    ouvrages[nombreOuvrages] = ouvrage;
    nombreOuvrages++;

    afficherResume(ouvrage);
}
