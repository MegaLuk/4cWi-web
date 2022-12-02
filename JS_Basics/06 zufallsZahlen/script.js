var zahl = Math.floor(Math.random() * 1000) + 1;
console.log(zahl);

if (zahl > 800) {
    console.log("Größer als 800");
} else if (zahl > 500 && zahl <= 800) {
    console.log("zwichen 500 und 800");
} else if (zahl > 200 && zahl <= 500) {
    console.log("zwichen 200 und 500");
} else if (zahl > 0 && zahl <= 200) {
    console.log("zwischen 0 und 200");
}