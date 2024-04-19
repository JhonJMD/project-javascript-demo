console.log('Ciclos  JS');

console.log('FOR:');
// for (inicializacion; condicion; actualizacion){
//     //codigo a ejecutar
// }

for (let number = 1; number <= 10; number++){
    console.log(number);
}

for (let i = 0, j = 5; i < 5; i++, j--){
    console.log(i, j);
}

for (let i = 0; i < 10; i++){
    const esPar = i % 2 == 0;
    if (esPar){
        continue;
    }
    console.log(i);
    if (i === 7){
        break;
    }
}

console.log('WHILE:');
// while (condicion){
//     //Codigo a ejecutar
// }

let cuentaAtras = 10;

while (cuentaAtras > 0){
    console.log(cuentaAtras);
    cuentaAtras = cuentaAtras - 1;
    
    if (cuentaAtras === 5){
        break
    }
}

console.log('DO WHILE:')

// do {
//     //codigo que se ejecuta al menos una vez
// }while (condicion);
let respuesta;

// do {
//     respuesta = confirm('¿Te gusta JavaScript?');
// } while (respuesta);

console.log('FUNCIONES:')
function sumar(){
    return 1 + 1;
}

const resultado = sumar();
console.log(sumar());

console.log('TERNIARIO:');
let edad = 18;
let mensaje = (edad >= 18) ? 'Eres mayor de Edad': 'Eres menor de Edad';
console.log(mensaje);

console.log('ARRAYS (LISTAS):');
const marcas = ['Renault','Mazda'];
console.log(marcas);

let marvel = ['Capitan America', 'Iron Man'];
console.table(marvel);

////////////////////////////////////////
let personajes = Array();
let menu = '1. Agregar\n2. Eliminar Ultimo personaje\n3. Ver personajes\n4. Salir'
let opcion = 0;

do{
    opcion = parseInt(prompt(menu))
    switch (opcion){
        case 1:
            personajes.push(prompt('Ingrese el nombre del personaje'));
            break;
        case 2:
            let per = personajes.pop();
            if (confirm('Desea eliminar el ultimo personaje insertado')){
                alert('Se ha eliminado');
            } else{
                personajes.push(per);
            }
            break;
        case 3:
            console.table(personajes);
            break;
    }
}while(opcion != 4);
console.log(personajes);
