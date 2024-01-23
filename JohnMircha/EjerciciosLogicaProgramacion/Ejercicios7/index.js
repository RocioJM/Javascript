//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
//Version1
{
    function ArrayAlCuadrado(mArray)
    {
        if (!Array.isArray(mArray)) {
            return console.log("No se proporcionó un array.");
        }
        if(mArray.length==0)
        {
            return console.log("Array vacio.");
        }else
        {
            let mArrayAlCuadrado = new Array(mArray.length);
            for(let i=0; i<mArray.length; i++)
            {
                mArrayAlCuadrado[i] = mArray[i]**2;
            }
            return console.log(`El array original es ${mArray}, y el array al cuadrado es ${mArrayAlCuadrado}.`);
        }
    }
    ArrayAlCuadrado();//Primer if.
    ArrayAlCuadrado([]);//Segundo if.
    ArrayAlCuadrado([2,4]);
}

//Version 2
{
    const devolverCuadrados = (arr = undefined)=>
    {
        if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
        if(!(arr instanceof Array)) return console.error("El valor que ingresastes no es un arreglo.");
        if(arr.length===0) return console.error("El arreglo esta vacio.");
        for(let num of arr)
        {
            if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
        }

        const newArr = arr.map(el => el* el);

        return console.info(`Arreglo original: ${arr}, \nArreglo elevado al cuadrado ${newArr}.`);
    }

    devolverCuadrados();
    devolverCuadrados(true);
    devolverCuadrados({});
    devolverCuadrados([]);
    devolverCuadrados([1,"3",4,{}]);
    devolverCuadrados([1,4]);
}

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
//Version1
{
    function NumAltoYBajo(mArray)
    {
        if (!Array.isArray(mArray)) {
            return console.log("No se proporcionó un array.");
        }
        if(mArray.length==0)
        {
            return console.log("Array vacio.");
        }else
        {
            let numBajo=0;
            let numAlto=0;
            for(valor of mArray)
            {
                if(valor<numBajo)
                {
                    numBajo = valor;
                }
                if(valor>numAlto)
                {
                    numAlto = valor;
                }
            }
            return console.log(`El numero bajo del array es ${numBajo}, y el numero alto del array es ${numAlto}.`);
        }
    }
    NumAltoYBajo();//Primer if.
    NumAltoYBajo([]);//Segundo if.
    NumAltoYBajo([2,4,-60]);
}

//Version 2
{
    const arrayMinMax = (arr =undefined)=>
    {
        if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
        if(!(arr instanceof Array)) return console.error("El valor que ingresastes no es un arreglo.");
        if(arr.length===0) return console.error("El arreglo esta vacio.");
        for(let num of arr)
        {
            if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
        }

        return console.info(`Arregloooooo original: ${arr},\n el valor maximo es ${Math.max(...arr)},\n el valor minimo es ${Math.min(...arr)}`);
    }
    arrayMinMax();
    arrayMinMax(true);
    arrayMinMax({});
    arrayMinMax([]);
    arrayMinMax([1,"3",4,{}]);
    arrayMinMax([1,4,5,99,-60]);
}

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
//Version1
{
    function ParesImpares(mArray)
    {
        if (!Array.isArray(mArray)) {
            return console.log("No se proporcionó un array.");
        }
        if(mArray.length==0)
        {
            return console.log("Array vacio.");
        }else
        {
            let arrayPares=[];
            let arrayImpares=[];
            for(valor of mArray)
            {
                if((valor%2)==0)
                {
                    arrayPares.push(valor);
                }else
                {
                    arrayImpares.push(valor);
                }
            }
            return console.log({
                arrayPares,
                arrayImpares
            });
        }
    }
    ParesImpares();//Primer if.
    ParesImpares([]);//Segundo if.
    ParesImpares([1,2,3,4,5,6,7,8,9,0]);
}

//Version 2
{
    console.info("Version 2");
    const separarParesImpares = (arr =undefined)=>
    {
        if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
        if(!(arr instanceof Array)) return console.error("El valor que ingresastes no es un arreglo.");
        if(arr.length===0) return console.error("El arreglo esta vacio.");
        for(let num of arr)
        {
            if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
        }

        return console.info({
            pares: arr.filter(num => num % 2 === 0),
            impares: arr.filter(num => num % 2 === 1),
        });
    }
    separarParesImpares();
    separarParesImpares(true);
    separarParesImpares({});
    separarParesImpares([]);
    separarParesImpares([1,"3",4,{}]);
    separarParesImpares([1,2,3,4,5,6,7,8,9,0]);
}
