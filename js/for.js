var contar = [5, 2, 3];
for (var i = 0; i < 3; i++) {
    contar[i]++;
}
// Ao final do laço cada elemento do vetor contar foi incrementado em 1

var doc = document;
for (var prop in doc) {
    document.write(prop + "<br />");
}