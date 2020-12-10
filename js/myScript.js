function myFunction(){
    var txt;
    var person = prompt("Introduzca su nombre :",
    "ruben velasque");
    if(person == null || person ==""){
        txt = "El usuario caneclo el mensaje.";
    }else{
        txt = "hola" + person +" como esta hoy ";
    }

    document.getElementById("demo").innerHTML = txt;
}