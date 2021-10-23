// TESTE DE CONDIÇÔES
function condicao() {

    // MESMO TESTE COM DIFERENTES INSTRUÇÕES
    // INSTRUÇÃO IF
    if (form1.nome.value == "") {
        alert("Por Favor Preencha o campo..(focus)");
        return form1.nome.focus();

    } 

    if(form1.nome.value==""){
        alert("Por Favor Preencha o campo..(select)");
        return form1.nome.focus();
        }else{
        alert("Obrigado, "+form1.nome.value);
        return form1.nome.select();
    } 

    // INSTRUÇÃO WHILE
    while (form1.nome.value == "") {
        alert("Por Favor Preencha o campo..(prompt)");
        form1.nome.value = prompt("Digite seu nome agora");
    }
    alert("Obrigado, " + form1.nome.value);
}
