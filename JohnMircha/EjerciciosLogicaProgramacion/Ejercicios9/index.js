//27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//    7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros 
//    aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//   decimal de una posición.
// - Crea un método que devuelva toda la ficha técnica de la película.
// - Apartir de un arreglo con la información de 3 películas genera 3 
//   instancias de la clase de forma automatizada e imprime la ficha técnica 
//   de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion})
    {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.ValidarId(id);
        this.ValidarTitulo(titulo);
        this.ValidarDirector(director);
        this.ValidarEstreno(estreno);
        this.ValidarPais(pais);
        this.ValidarGeneros(generos);
        this.ValidarCalificacion(calificacion);
    }

    static get listaGeneros()
    {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosAceptados()
    {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    ValidarCadena(propiedad, valor)
    {
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto.`);
        return true;
    }

    ValidarLongitudCadena(propiedad, valor, longitud)
    {
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);
        return true;
    }

    ValidarNumero(propiedad,valor)
    {
        if(!valor) return console.error(`${propiedad} "${valor}" esta vacio.`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero.`);

        return true;
    }

    ValidarArreglo(propiedad,valor)
    {
        if(valor === undefined) return console.warn(`${propiedad} "${valor}" esta vacio.`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo.`);
        if(valor.length===0) return console.error(`${propiedad} "${valor}" no tiene datos.`);

        for(let cadena of valor)
        {
            if(typeof cadena!=="string") return console.error(`El valor "${cadena}" ingresado, NO es un cadena de texto.`);
        }
        
        return true;
    }

    //******************************************************************************************************************** */

    ValidarId(id)
    {
        if(this.ValidarCadena("IMDB id", id))
        {
            if(!(/^([a-z]{2}[0-9]{7})$/.test(id)))
            {
                return console.error(`IMDB id "${id}" no es valido, debe de tener 9 caracteres, las dos primeras letras minusculas, los 7 restantes numeros.`);
            }
        }
    }

    ValidarTitulo(titulo)
    {
        if(this.ValidarCadena("Titulo", titulo))
        {
            this.ValidarLongitudCadena("Titulo", titulo, 100);
        }
    }

    ValidarDirector(director)
    {
        if(this.ValidarCadena("Director", director))
        {
            this.ValidarLongitudCadena("Director", director, 50);
        }
    }

    ValidarEstreno(estreno)
    {
        if(this.ValidarNumero("Año de estreno", estreno))
        {
            if(!(/^([0-9]{4})$/.test(estreno)))
            {
                return console.error(`Año de estreno "${estreno}" no es valido, debe de un numero de 4 digitos.`);
            }
        }
    }

    ValidarPais(pais)
    {
        this.ValidarArreglo("Pais", pais);
    }

    ValidarGeneros(generos)
    {
        if(this.ValidarArreglo("Generos", generos))
        {
            for(let genero of generos)
            {
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!Pelicula.listaGeneros.includes(genero))
                {
                    console.error(`Genero(s) incorrectos ${generos.join(", ")}`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    ValidarCalificacion(calificacion)
    {
        if(this.ValidarNumero("Calificacion", calificacion))
        {
            if(this.ValidarNumero("Calificacion",calificacion))
            {
                return (calificacion < 0 || calificacion> 10)
                ? console.error(`La calificacion taiene que estar en un rango entre 0 y 10.`)
                : this.calificacion = calificacion.toFixed(1);//acortar numero decimales.
            }
        }
    }

    fichaTecnica()
    {
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join("-")}"\n\nCalificacion: "${this.calificacion}"\nIMDB Id: "${this.id}"\nGeneros: "${this.generos.join(", ")}"\n`)
    }
}

// //Pelicula.generosAceptados();
// const peli = new Pelicula({
//     id:"tt1234567",
//     titulo:"Titulo de la peli",
//     director:"Pepe Sanchex",
//     estreno:2020,
//     pais:["Mexico","Francia"],
//     generos:["Comedy", "Sport"],
//     calificacion: 7.7
// });

// peli.fichaTecnica();

const misPelis = [
    {
        id:"tt1234667",
        titulo:"Peli1",
        director:"Jaimito",
        estreno:2024,
        pais:["Peru","Francia", "España"],
        generos:["Comedy", "Animation"],
        calificacion: 8
    },
    {
        id:"tt1234567",
        titulo:"Peli2",
        director:"Pepe Sanchex",
        estreno:2020,
        pais:["Mexico","Francia"],
        generos:["Comedy", "Sport"],
        calificacion: 7.7
    },
    {
        id:"tt8434567",
        titulo:"Peli3",
        director:"Luz Cuesta",
        estreno:2010,
        pais:["Francia"],
        generos:["Adventure", "Sport"],
        calificacion: 9.7
    }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());