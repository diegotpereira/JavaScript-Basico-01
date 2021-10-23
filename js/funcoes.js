// function incArray(array, valor) {
//     for (item in array) {
//         array[item] += valor;
//     }

//     return array;
// }

// incArray("Banana", "Maça")

// var areaTri = new Function("b", "h", "return (b*h)/2;");

// areaTri(2, 4);




// Instanciando Objeto
// var car = new Carro("G800", "Gurgel", 1976, 1.0);

// document.write("Carro: " + car.modelo + "<br>");
// document.write("Modelo: " + car.marca + "<br>");
// document.write("Ano: " + car.ano + "<br>");
// document.write("Motor: " + car.motor + "<br>");


// function calculo_consumo(distancia) {
//     return distancia / (15 / this.motor);
// }

// function Carro(modelo, marca, ano, motor) {
//     this.modelo = modelo;
//     this.marca = marca;
//     this.ano = ano;
//     this.motor = motor;
// }

// Carro.prototype.rodas = 4;
// Carro.prototype.consumo = calculo_consumo;

// var car1 = new Carro("G800", "Gurgel", 1976, 1.0);
// var car1 = new Carro("147", "Fiat", 1984, 2.0);

// if (car1.rodas == 4) window.alert("ainda bem!");

// var gas = car2.consumo(180);


function up(sub, pos, str) {
    return sub.toUpperCase();
}

var a = "Não se esqueça de sua toalha!";
var res = a.replace("toalha", up);