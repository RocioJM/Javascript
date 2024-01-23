// 1. Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolvera 10.
let cadenaTexto = "Hola Mundo";
console.log(cadenaTexto);

function contar()
{
    let total=0;
    for( caracter of cadenaTexto)
    {
        ++total;
    }
    return total;
}

console.log(cadenaTexto + "tiene " + contar() + " caracteres.\n");

// 2. Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola Mundo") devolvera 4.
let indiceCorte=4;
let textoResultado = "";

function cortar()
{
    let contador=0;
    for( caracter of cadenaTexto)
    {
        ++contador;
        if(contador <= indiceCorte)
        {
            textoResultado += caracter;
        }else{
            break;
        }
        
    }
    return textoResultado;
}

console.log("Los " + indiceCorte + " primeros caracteres de la cadena de texto son: " + cortar() + "\n");

// 3. Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola Mundo") devolvera 4.
let textoResultado2 = cadenaTexto.split(" ");

console.log("Estas son las todas las palabras separadas: " + textoResultado2);

// 2. Programa una funcion que repita un texto X veces, pe. miFuncion("Hola Mundo") devolvera Hola Mundo Hola Mundo Hola Mundo.
let numRepeticiones=3;

function repeticiones()
{
    for( let i=0; i<numRepeticiones;i++)
    {
        console.log(cadenaTexto)
    }
    
}

repeticiones();