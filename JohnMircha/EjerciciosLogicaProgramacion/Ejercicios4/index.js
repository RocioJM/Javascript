//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
//Version1
{
    // function IsNumPrimo(numero = 0)
    // {
    //     let modulo = numero %
    // }
}

//Version 2
{
    function numeroPrimo(numero = undefined)
    {
        //***  Comprobaciones */
        if(numero === undefined)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof numero != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }
        if (Math.sign(numero)== -1)
        {
            return console.error(`El valor "${numero}" no puede ser un nunmero negativo.`);
        }
        if(numero === 0)
        {
            return console.warn("El numero no puede ser 0.");
        }
        if(numero === 1)
        {
            return console.warn("El numero no puede ser 1.");
        }
        //***  /Comprobaciones */

        let divisible = false;
        for(let i=2; i<numero;i++)
        {
            if((numero%i)===0)//Si el residuo da 0 quiere decir que se pudo dividir exactamente por este numero
            {
                divisible = true;
                break;
            }
        }
        return (divisible)
        ? console.log(`El numero ${numero} no es un numero primo.`)
        : console.log(`El numero ${numero} Si es un numero primo.`);
    }
    numeroPrimo(4);
}

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
//Version1
{
    function IsPar(numero = undefined)
    {
        if(numero === undefined)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof numero != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }

        if(numero%2 ==0)
        {
            console.info(`El ${numero} es par.`);
        }else{
            console.info(`El ${numero} es impar.`);
        }
    }

    IsPar(2);
    IsPar(3);
}

//Version 2
{

}

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
//Version1
{
    function ConversorTemperaturas(numero = undefined, tipo = undefined)
    {
        //** Comprobacion de valores validos ****** */
        if(numero === undefined)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof numero != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }
        if(tipo === undefined)
        {
            return console.warn("No ingresaste el tipo de temperatura.");
        }
        if(tipo != "C" && tipo != "F")
        {
            return console.error(`Introduce "C" si introduces celsius o "F" si introduces Fahrenheit para convertir.`);
        }
        //** /Comprobacion de valores validos ****** */

        if(tipo== "C")
        {
            let temp = numero*(33.8);
            return console.info(`${numero}º${tipo} es ${temp}ºF`);
        }else{
            let temp = numero*(-17.2222);
            return console.info(`${numero}º${tipo} es ${temp}ºC`);
        }
    }
    ConversorTemperaturas(1,"C");
    ConversorTemperaturas(1,"F");
}

//Version 2
{

}

