let word = "";
let letter;

    letter = prompt('Tape UNE lettre stp :');

    if (letter.includes("?")) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log("Ouais Ouais...");
    }
    if (letter.includes("Fortnite")) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log("on s' fait une partie soum-soum ?");
    }
    if (letter.includes("fortnite")) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log("on s' fait une partie soum-soum ?");
    }
    if (letter.toUpperCase()) {
        console.log('Pwa, calme-toi...');
    }
    if (!letter) {
        word += letter;
        console.log("t'es en PLS ?");
    }

    else{
    console.log("balek");
    }