function incArray(array, valor) {
    for (item in array) {
        array[item] += valor;
    }

    return array;
}

incArray("Banana", "Maça")

var areaTri = new Function("b", "h", "return (b*h)/2;");

areaTri(2, 4);