let word = "";
let letter;

    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log("bonjour " + word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
    }