var a = 12;
var b = 5;

if (a == b) {
    window.alert("12 é igual a 5?!?!");
} else {
    window.alert("a é diferente de b");
}

var a = 10;

if (a < 6) {
    alert("a menor que 6");

} else if (a > 6) {
    alert("a maior que 6");

} else {
    alert("se a não é maior nem menor que 6, a é 6!");
}


var a = 8;
(a >= 5 ? alert("sim") : alert("não"));

// Isso equivale ao código
var a = 5;
if (a >= 5) {
    alert.apply("sim");

} else {
    alert("não");
}