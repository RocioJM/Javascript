// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.
//Version 1
{
    let max = 600;
    let min = 501;
    let numero = Math.floor(Math.random()*(max - min + 1) + min);

    console.log("Numero random:" + numero);
}
//Version 2
{
    const aleatorio = () => console.info("Version 2 random: "+ Math.round(Math.random()*100 + 500));
    aleatorio();
}

// 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//Version 1
{
    function IsCapicua (numero = 0)
    {
        //const valoresAceptados = /^[0-9]+$/;
        let temp = "";
        if(numero == 0 || !Number.isInteger(numero))
        {
            console.warn("No has introducido un numero valido.");
        }else{
            temp = numero.toString();
            console.log(temp);
            let AlReves = temp.split("").reverse().join("");
            console.log(AlReves);
            if(temp == AlReves)
            {
                console.info("Es capicua.");
            }else{
                console.info("NO es capicua.");
            }
        }
    }
    let num = 123321;
    IsCapicua(num );
}
//Version 2
{
    const capicua = (numero = 0 ) =>
    {
        if(!numero)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof numero != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }
        numero = numero.toString();
        let alReves = numero.split("").reverse().join("");

        return (numero === alReves) 
        ? console.info(`Si es capicua Numero original ${numero}, Numero al reves ${alReves}`)
        : console.info(`No es capicua Numero original ${numero}, Numero al reves ${alReves}`)
    }

    //capicua();
    //capicua(123);
    //capicua(123321);
    capicua(212.212);
}

// 10. Programa una funcion que calcule el factorial de un numero (El factorial de un entero positivo n, se define como el producto de todos los numero enteros positivos desde 1 hasta n). P.E miFuncion(5) devolvera 120.
//Version 1
{
    function calcularFactorial (numero =0)
    {
        if(!numero)
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
        let factorial=1;
        for(let i =1; i <= numero ; i++)
        {
            factorial = factorial * i;
        }
        return factorial;
    }
    const num= 4;
    console.info(`El factorial de ${num} es ${calcularFactorial(num)}.`)
}
//Version 2
{
    function Factorial (numero = undefined)
    {
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
        let factorial=1;
        for(let i = numero; i>1 ; i--)
        {
            factorial *=  i;
        }
        return factorial;
    }
    const num= 4;
    console.info(`El factorial Profe de ${num} es ${calcularFactorial(num)}.`)
}