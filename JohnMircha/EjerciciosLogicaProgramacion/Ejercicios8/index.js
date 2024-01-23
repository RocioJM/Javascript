//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//Version1
{
    function Ordenacion (arr = undefined)
    {
        let tiempoInicio = new Date().getTime();
        if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
        if(!Array.isArray(arr)) return console.error("El valor que ingresastes no es un arreglo.");
        if(arr.length===0) return console.error("El arreglo esta vacio.");
        for(let num of arr)
        {
            if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
        }

        let ordenAscendente = Array.from(arr);
        let temp = ordenAscendente[0];
        for(let i = 0; i < ordenAscendente.length; i++)
        {
            for(let j = i+1; j < ordenAscendente.length; j++)
            {
                if(ordenAscendente[i]>ordenAscendente[j])
                {
                    temp = ordenAscendente[i];
                    ordenAscendente[i]=ordenAscendente[j];
                    ordenAscendente[j]=temp;
                }
            }
        }
        let ordenDescendente = Array.from(arr);
        for(let i = 0; i < ordenDescendente.length; i++)
        {
            for(let j = i+1; j < ordenDescendente.length; j++)
            {
                if(ordenDescendente[i]<ordenDescendente[j])
                {
                    temp = ordenDescendente[i];
                    ordenDescendente[i]=ordenDescendente[j];
                    ordenDescendente[j]=temp;
                }
            }
        }

        let tiempoFin = new Date().getTime();
        console.log({
            arr,
            ordenAscendente,
            ordenDescendente,
            tiempoInicio,
            tiempoFin
        });
        
    }
    Ordenacion([7, 5,7,8,6]);
}

//Version2
{

}

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//Version1
// {
//     function EliminarDuplicados (arr = undefined)
//     {
//         if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
//         if(!Array.isArray(arr)) return console.error("El valor que ingresastes no es un arreglo.");
//         if(arr.length===0) return console.error("El arreglo esta vacio.");
//         for(let num of arr)
//         {
//             if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
//         }

//         Array.
//     }
// }

//Version2
{

}

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
//Version1
{

}

//Version2
{

}