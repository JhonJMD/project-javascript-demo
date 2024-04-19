// console.log('Hola JS');
// console.error('Esto es un error');
// console.info('Mensaje informativo');
// console.warn('Mensaje de advertencia');
let edad = 17;
// if (edad >= 18){
//     console.log('Es mayor de edad'); 
// } else {
//     console.log('Es menor de edad');
// }
// if ((edad >= 1) && (edad < 11)){
    
// } else if ((edad >= 11) && (edad < 18)){

// } else if ((edad >= 18) && (edad < 51)){

// }

let dia = new Date().getDay(); //new crea instancia en una clase
switch (dia){
    case 1:
        console.log('Hoy es Lunes')
    case 2:
        console.log('Hoy es Martes')
    case 3:
        console.log('Hoy es Miercoles')
    case 4:
        console.log('Hoy es Jueves')
    case 5:
        console.log('Hoy es Viernes')
    case 6:
        console.log('Hoy es Sabado')
    case 7: 
        console.log('Hoy es Domingo')
}