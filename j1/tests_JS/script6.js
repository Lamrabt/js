function traduireARN(arn) {
    const codegenetique = {
        UCU: "Sérine",
        UCC: "Sérine",
        UCA: "Sérine",
        UCG: "Sérine",
        AGU: "Sérine",
        AGC: "Sérine",
        CCU: "Proline",
        CCC: "Proline",
        CCA: "Proline",
        CCG: "Proline",
        UUA: "Leucine",
        UUG: "Leucine",
        UUU: "Phénylalanine",
        UUC: "Phénylalanine",
        CGU: "Arginine",
        CGC: "Arginine",
        CGA: "Arginine",
        CGG: "Arginine",
        AGA: "Arginine",
        AGG: "Arginine",
        UAU: "Tyrosine",
        UAC: "Tyrosine"
};
const codons = arn.match(/.{1,3}/g);
const proteines = codons.map(i => codegenetique[i]);
return proteines;
}

const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log("first arn: " + traduireARN(arn1))
console.log("second arn: " + traduireARN(arn2))