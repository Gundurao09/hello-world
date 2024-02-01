// ------------------------------------------------------------------
const x = 500;
const year = Math.round(x / 365);
const mon = Math.round(x / 30) - 12;
const days = x - year * 365 - mon * 30;
console.log("year:", year, "month:", mon, "days:", days);
// --------------------------------------------------------------------------
const dolfinscore = (96 + 108 + 89) / 3;
const koalasscore = (88 + 91 + 110) / 3;
console.log(dolfinscore, koalasscore);
if (dolfinscore > koalasscore) {
    console.log("dolfins is winners....");
} else if (dolfinscore < koalasscore) {
    console.log("koalas is win....");
} else if (dolfinscore === koalasscore) {
    console.log("draw..")
}
// ------------------------------------------------
const dolfinscore1 = (97 + 112 + 101) / 3;
const koalasscore1 = (109 + 95 + 123) / 3;
console.log(dolfinscore1, koalasscore1);
if (dolfinscore1 > koalasscore1 && dolfinscore1 >= 100) {
    console.log("dolfins is winners....");
} else if (dolfinscore1 < koalasscore1 && koalasscore1 >= 100) {
    console.log("koalas is win....");
} else if (dolfinscore1 === koalasscore1) {
    console.log("draw..")
}
// --------------------------------------------------------------
const dolfinscore2 = (97 + 112 + 101) / 3;
const koalasscore2 = (109 + 95 + 106) / 3;
console.log(dolfinscore2, koalasscore2);
if (dolfinscore2 > koalasscore2 && dolfinscore2 >= 100) {
    console.log("dolfins is winners....");
} else if (dolfinscore2 < koalasscore2 && koalasscore2 >= 100) {
    console.log("koalas is win....");
} else if (dolfinscore2 === koalasscore2 && dolfinscore2 >= 100 && koalasscore2 >= 100) {
    console.log("draw..")
} else {
    console.log("no on wins...")
}