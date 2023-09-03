//PATRON PROXY: este patron te permite leer y modificar un objeto de maner indirceta
const persona = {
    nombre: "Juan Perez",
    edad: 30
};
//sin Reflect
// const mensajero = new Proxy(persona, {
//     get: (objeto, propiedad) => {     //get es para leer
//         console.log(`El valor es ${objeto[propiedad]}`)
//     },
//     set: (objeto, propiedad, valor) => { //set es para actualizar
//         if(!valor) {throw new Error ("Necesita un valor!")}
//         console.log(`Cambiado de ${objeto[propiedad]} a ${valor}`);
//         objeto[propiedad] = valor
//     }
// });


// con Reflect
const mensajero = new Proxy(persona, {
    get: (objeto, propiedad) => {     //get es para leer
        console.log(`El valor es ${Reflect.get(objeto, propiedad)}`)
    },
    set: (objeto, propiedad, valor) => { //set es para actualizar
        if(!valor) {throw new Error ("Necesita un valor!")}
        console.log(`Cambiado de ${Reflect.get(objeto, propiedad)} a ${valor}`);
        Reflect.set(objeto, propiedad, valor)
    }
});



mensajero.nombre;
mensajero.nombre = "Alberto Galileo";
mensajero.nombre = "";

// console.log(mensajero)
// console.log(persona)^