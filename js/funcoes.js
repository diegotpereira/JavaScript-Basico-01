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


// function up(sub, pos, str) {
//     return sub.toUpperCase();
// }

// var a = "Não se esqueça de sua toalha!";
// var res = a.replace("toalha", up);


// function primeiraFuncao(){
//     alert("Isto é uma função JavaScript");
// }

// function exemplo(texto) {
//     alert(texto);
// }
// exemplo("Funções em Javascript..!");

// var ret = prompt("Digite seu nome", "");
// var shor = mostranome(ret);

// alert(shor);

// function mostranome(nome) {
//     if (nome == "" || nome == null) {
//         return ("erro");

//     } else {
//         return (nome);
//     }
// }


// OBJETOS COMO ARGUMENTO
// mensagem("SENAC", "PORTO ALEGRE")
// mensagem("DTP", "SOFTWARE")

// function mensagem(mensagem1, mensagem2) {
//     for(i =0; i < mensagem.arguments.length; i++) {
//         alert(mensagem.arguments[i])
//     }
//     // alert(mensagem1)
//     // alert(mensagem2)
// }

// // EVENTO ONBLUR
// function testeONBLUR() {
//     if (form1.campo1.value == "") {
//         alert("Por favor preencher o campo")
//     }
// }

// // TESTE DE RETORNO
// function teste() {
//     valor = 5 ;
//     if (valor >= 5) {
//         return(true);

//     } else {
//         return (false);
//     }
// }

// FUNÇÃO EVAL
// valor = 5
// alert(eval("2*valor"))


// FUNÇÃO ISNAN 
// function condicaoISNAN(valor) {
//     if (isNAN(valor)) {
//         alert("Não é um valor número..!")
//     }
// }


// FUNÇÃO PARSEFLOAT
// valor=parseFloat("123,456");
// alert(valor)+1; 

// FUNÇÃO PARSEINT 
// valor=parseFloat("123.456");
// alert(valor);


// valor=parseInt("ff",16); //Conversão hexadecimal, retorna 255
// valor=parseInt("0xff",16); //Conversão hexadecimal, retorna 255
// valor=parseInt("1111",2); //Conversão binário, retorna 15
// valor=parseInt("765",8); //Conversão octal, retorna 501 

// ADICIONAR AO FAVORITOS
// var url = "https://github.com/diegotpereira"
// var titulo = "Mais Projetos"

// function Favoritos() {
//     if (document.all) {
//         window.external.AddFavorite(url, titulo)
//     }
// }

// JANELA EM MOVIMENTO
// function expandingWindow(website) {
//     var heightspeed=2;//velocidade vertical (valor maior = mais lento)
//     var widthspeed=7;//velocidade horizontal(valor maior = mais lento)
//     var leftdist = 0; // distância do canto esquerdo da janela
//     var topdist = 0; // distância do canto superior da janela

//     if (document.all) {
//         var winwidth = window.screen.availWidth - leftdist
//         var winheight = window.screen.availHeight - topdist
//         var sizer = window.open("", "", "left=" + leftdist + ", top=" + topdist + ", width=1, height=1, scrollbars=yes")
        
//         for(sizeheight = 1; sizeheight < winheight; sizeheight += heightspeed) {
//             sizer.resizeTo("1", sizeheight)
//         }

//         for(sizewidth =1; sizewidth < winwidth; sizewidth += widthspeed) {
//             sizer.resizeTo(sizewidth, sizeheight)
//         }

//         sizer.location = website

//         }  else {
//         window.location = website
//     }
// }


// TEXTO NA BARRA DE STATUS EM MOVIMENTO
// var speed = 10
// var pause = 1500 
// var timerID = null 
// var bannerRunning = false;

// Criação do Array 
// var ar  = new Array()
// ar[0] = "Diego.."
// ar[1] = "Teixeira"
// ar[2] = "Pereira"
// ar[3] = "Informática:"
// ar[4] = "à cidade de Porto Alegre."

// var message = 0
// var state = ""

// clearState()

// function stopBanner() {
//     if (bannerRunning) 
//         clearTimeout(timerID)
//         timerRunning = false
//     }

//     function startBanner() {
//         stopBanner()
//         showBanner()
//     }

//     function clearState() {
//         state = ""

//         for(var i = 0; i < ar[message].length; ++i) {
//             state += "0"
//         }
//     }

//     function showBanner() {
//         if (getString()) {
//             message ++

//             if (ar.length <= message) {
//                 message = 0
//                 clearState()
//                 timerID = setTimeout("showBanner()", pause)

//             } else {
//                 var str = ""
//                 for(var j = 0; j < state.length; ++j) {
//                     str += (state.charAt(j) == "1") ? ar [message].charAt(j) : ""
//                 }
//                 window.status = str
//                 timerID = setTimeout("showBanner()", speed)
//             }
//         }

//             function getString() {
//                 var full = true
//                 for(var j = 0; j < state.length; ++j) {
//                     if (state.charAt(j) == 0) 
//                         full = false 
//                     }

//                     if (full) return true 

//                     while(1) {
//                         var num = getRandom(ar[message].length)
//                         if (state.charAt(num) == "0") 
//                             break
//                         }

//                         state = state.substring(0, num) + "1" + state.substring(num + 1, state.length) 

//                         return false
//                     }

//                     function getRandom(max) {
//                         var now = new Date()
//                         var num = now.getTime() * now.getSeconds() * Math.random()

//                         return num % max 
//                     }
//                 }
            
        
// CARREGAR TABELA DE CORES NO BODY onload.
function gerarTabela() {
 document.write('<table border=1 width="100%">')

 var valores = "00336699CCFF"
 var r, g, b 
 var cor 

 for(r=0; r<6; r++) {
     for(g=0; g<6;g++) {
         if(g%2==0) document.write("<tr>")
         for(b=0;b<6; b++) {
            cor = valores.substr(2*r,2) + valores.substr(2*g,2) + valores.substr(2*b,2)
            document.write('<td align="center" bgcolor="#' + cor + '">')
            if(g<3) document.write("<font size=-2 color=white>")
            else document.write("<font size=-2 color=black>")
            document.write(cor + "</font></td>")
         }
         if(g%2==1) document.write("</tr>")
     }
 }
 document.write("</table>")
}