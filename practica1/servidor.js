console.log("Hola Mundo Js desde el servidor")

/* Operaciones */
let edad1 = 10
let edad2 = 22

console.log("Edad promedio")
console.log((edad1 + edad2) / 2)

/* Medir tiempo de un proceso */
console.time('miproceso')

    for(let i=0; i<1000000; i++){
        let x = i*2
    }

console.timeEnd('miproceso')

/* Objetos tipo tabla */
let usuarios= [
    {nombre: "andy", edad: 20},
    {nombre: "miguel", edad: 22}
]
console.table(usuarios)
