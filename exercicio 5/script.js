let ano
ano = prompt ("digite um ano")
ano = Number(ano)
if ((ano % 4 === 0 && ano % 100 !==0) || (ano % 400 === 0 )){
alert("Ano bissexto! ")
}   
else{
    alert("nao é ano bissexto ")
}