// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
//Version 1
{
    function contarVocalesConsonantes(texto = "")
    {
        if(texto === "")
        {
            return console.info("No ha introducido ningun texto.")
        }
        if(typeof texto !== `string`)
        {
            return console.warn("No hay introducido caracteres de tipo texto.");
        }
        const vocales = [`a`,`e`,`i`,`o`,`u`];
        const consonantes = [`B`, `C`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `M`, `N`, `Ñ`, `P`, `Q`, `R`, `S`, `T`, `V`, `W`, `X`, `Y`, `Z`];
        let contVocales = 0;
        let contConsonantes = 0;
        for(let caracter of texto)
        {
            for (let vocal of vocales)
            {
                if(caracter.toLocaleLowerCase() === vocal.toLocaleLowerCase())
                {
                    contVocales++;
                }
            }
            for (let consonante of consonantes)
            {
                if(caracter.toLocaleLowerCase() === consonante.toLocaleLowerCase())
                {
                    contConsonantes++;
                }
            }
        }
        return console.log(`El numero de vocales es de: ${contVocales} y el numero de consonantes es de ${contConsonantes}.`)
    }
    contarVocalesConsonantes();
    contarVocalesConsonantes("Hola Mundo");
}

//Version2
{
    const contarLetras = (cadena = "") => {
        if(!cadena) return console.warn("No ingresastes una cadena de texto.");
        if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado. No es una cadena de texto.`);

        let mvocales = 0;
        let mconsonantes = 0;
        cadena = cadena.toLowerCase();
        for(let letra of cadena)
        {
            if(/[aeiouáéíóúü]/.test(letra))
            {
                mvocales++;
            }
            if(/[bcdfghjklmnpqrstvwxyz]/.test(letra))
            {
                mconsonantes++;
            }
        }
        return console.info({
            cadena,
            mvocales,
            mconsonantes
        });
    }
    // contarLetras();
    // contarLetras(3);
    contarLetras("Hola Mundo");
}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
//Version 1
{
    function NombreValido(texto = "")
    {
        if(texto === "")
        {
            return console.warn("No ha introducido ningun texto.")
        }
        if(typeof texto !== `string`)
        {
            return console.warn("No hay introducido caracteres de tipo texto.");
        }
        let nombreCompleto = texto.split(" ");
        
        if(nombreCompleto.length>=2)
        {
            return console.log(`el nombre de ${texto} es valido.`);
        }else{
            return console.log(`el nombre de ${texto} no es valido.`);
        }
    }
    NombreValido("Hola papa");
}

//Version2
{
    const validarNombre = (nombre = "") =>
    {
        if(!nombre) return console.warn("No ingresastes una nombre de texto.");
        if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado. No es un nombre.`);

        // /^[ esto es para comenzar con la expresion regular
        // ]+$/ es para que pare ahi ya la expresion regular
        // dentro de la expresion para que acepte los espacios hay que poner \s
        let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre);

        return (expReg)
        ? console.info(`"${nombre}" es un nombre valido`)
        : console.info(`"${nombre}" no es un nombre valido`);
    }

    validarNombre();
    validarNombre(3);
    validarNombre("John Mircha");
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//Version 1
{
    function ValidarEmail(email = "")
    {
        if(email === "")
        {
            return console.warn("No ha introducido ningun email.")
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email))
        {
            return console.log("El email es valido.")
        }else
        {
            return console.log("El email no es valido.")
        }
    }
    ValidarEmail();
    ValidarEmail("rocioasd.com");
    ValidarEmail("rociojm@gmail.com");
}

//Version2
{
    const mValidarEmail = (email = "") =>
    {
        if(!email) return console.warn("No ingresastes un email.");
        if(typeof email !== "string") return console.error(`El valor ${email} ingresado. No es una cadena de texto.`);

        // /^[ esto es para comenzar con la expresion regular
        // ]+$/ es para que pare ahi ya la expresion regular
        // dentro de la expresion para que acepte los espacios hay que poner \s
        let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

        return (expReg)
        ? console.info(`"${email}" es un email valido`)
        : console.info(`"${email}" no es un email valido`);
    }
    mValidarEmail();
    mValidarEmail(3);
    mValidarEmail("john,mir,cha@gmail");
    mValidarEmail("johnmircha@gmail.com");
    
}