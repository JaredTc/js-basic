//Estructura
//if(){
//Bloque de code que se ejecuta si se cumole la condicion


//}
//else{
    //si la condicion no se falla
//}

var estaLloviendo = false;
var Estasoleado = false;
if(estaLloviendo || Estasoleado){
    console.log("Sacar la sombrilla");
}
else{
    console.log("No voy a sacar nada");
}

var edad = 18;
if (edad === 18){
    console.log("Tienes Shot gratis");

}
else if (edad > 18){
 console.log("Bienvenido a los DevShots");
}
else{
    console.log("No Puede entrar.");
}


// ternario

//condcion ? : ;
var edad = 15
var mensaje = edad > 18 ? "puede entrar " : "lo siento no puede entrar";
console.log(mensaje);