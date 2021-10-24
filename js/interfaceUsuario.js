// MÉTODO CONFIRM
// teste=confirm("Tem Certeza que Deseja Fechar?")

// if (teste==1) {
//     alert("Arquivos fechados")

// } else {
//     alert("Operação Cancelada")
    
// }


// MÉTODO PROMPT
// teste=prompt("Digite seu nome:", "")
// alert(teste + " Seja muito Bem Vindo")

// MÉTODO SETTIMEOUT 
// texto = "PORTO ALEGRE"
// valocidade = 50
// controle = 1

// function flash() {
//     if (controle == 1) {
//         window.status = texto
//         controle = 0

//     } else {
//         window.status = ""
//         controle = 1
//     }
//     setTimeout("flash();", velocidade)
// }


// // TRABALHANDO COM JANELAS TRABALHANDO COM JANELAS 
// janela2 = window.open("","", "status=yes, width=250,height=200")
// janela2.document.write("<HEAD><TITLE>JANELA 2</TITLE></HEAD>")
// janela2.document.write("<CENTER><H2>FONT FACE=arial color=white>JAVA SCRIPT BÁSICO</H2></CENTER></FONT>")
// janela2.document.write("<INPUT TYPE=button NAME=fecha VALUE=Fechar Janela onClick=window.close()>")


// function Remote() {
//     var remote = null
//     remote = window.open('', 'vRemote', 'toolbar=no, location=no, directories=no, status=mo, menubar=no, scrollbars=yes, resizable=no, fullscreen=yes')
    
//     if (remote !== null) {
//         if (remote.opener == null) {
//             remote.opener = self 
//         }   
//         remote.location.href = 'https://github.com//diegotpereira'
//     }
// }

// Remote()
// history.go(-1)

// MÉTODO TOLOCALESTRING
// function relogio() {
//     tempo = new Date()
//     hora = tempo.getHours()
//     min = tempo.getMinutes()
//     sec = tempo.getSeconds()

//     if (sec < 10) {
//         sec = "0" + sec
//     }

//     defaultStatus = hora + ":" + min + ":" + sec
//     setTimeout("relogio()", "1000")

// }
function mudaCor(cor) {
    document.bgColor = cor
}