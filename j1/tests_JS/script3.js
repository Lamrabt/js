let n = prompt('De quel nombre veux-tu calculer la factorielle ?');
let c = "#"
let nbColonnes = 1 + 2 * (n - 1), nbSpaceChar = nbColonnes - 1, output = "";
    for (let lineNb = 0, nbTextChar = 1;
        lineNb < n;
        lineNb++, nbSpaceChar -= 2, nbTextChar += 2) {
            output = output.concat(" ".repeat(nbSpaceChar)).concat(c.repeat(nbTextChar));
            output = (lineNb < n - 1) ? output.concat("\n") : output;
    }
     console.log(output);

