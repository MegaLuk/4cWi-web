// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let singleappleweight = 0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let singlebananaweight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Anzahl Äpfel pro Kilo = "+ (1/singleappleweight));
console.log("Anzahl Bananen pro Kilo = "+ (1/singlebananaweight));

console.log("Preis pro Apfel = "+ applePricePerKilo /(1/singleappleweight));
console.log("Preis pro Banane = "+bananaPricePerKilo/(1/singlebananaweight));
// Preis von 8 Äpfeln
console.log("Preis von 8 Äpflen = "+ applePricePerKilo /(1/singleappleweight)*8);
// Preis von 17 Bananen
console.log("Preis von 17 Banane = "+bananaPricePerKilo/(1/singlebananaweight)*17);
// Preis von 1 Tonne Äpfel
console.log("Preis von 1 Tonne Äpfel "+applePricePerKilo*1000);
// Preis von 1 Tonne Bananen
console.log("Preis von 1 Tonne Bananen "+bananaPricePerKilo*1000);
