let hora;
hora = prompt ("que horas são? (0 a 23)");
hora = Number(hora)
if (hora >= 0 && hora <=11){
    alert("bom dia")
}
else if(hora >=12 && hora <=17){
    alert("boa tarde")
}
else if(hora>=18 && hora <= 23){
    alert("boa noite")
}
else{
    alert("Hora Invalida.");
}

