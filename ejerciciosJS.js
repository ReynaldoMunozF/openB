//EJERCICIO #Tema 1

console.log("Estoy realizando el curso de JavaScript, espero aprender mucho")

//EJERCICIO #Tema 2 

let str = "Esta es la Frase Original";

const cambio = () => { 
    let str = "Esta es la Frase nueva";
    console.log (`se cambio la frase a  ${str}`);
}

cambio();
console.log (str)

//EJERCICIO 1 #Tema Bifurcaciones if else y switch


for (a = 1 ; a <= 100 ; a++) {
    if ((a % 2) === 0){
    console.log (`${a} es numero par`)
    
    }
    else{
    console.log (`${a} es numero impar`)
            
    }

}
//EJERCICIO 2 #Tema Bifurcaciones if else y switch 
let resultado = false;

for (n = 1 ; n<=10 ; n++){
    for (i = 2 ; i < n ; i++){
        if((n % i) === 0){
            resultado = true;
            break;
        }
    }
    if (resultado) {
        console.info(`${n} no es primo`)
        resultado = false;
    } else {
        console.info(`${n} es primo`)
    }

}
//EJERCICIO 1  #Tema cadenas de texto

let str1 = "El perro de mi vecina es muy molesto"
let strCambiado = str1.replace("vecina","vecino")

console.log(strCambiado)

//EJERCICIO 2  #Tema cadenas de texto
let str2= "El perro de mi vecina es muy molesto"
let strCambiado2 = str2.toUpperCase()

console.log(strCambiado2)



//EJERCICIO #Tema 5

for (i=0 ; i<=10 ; i++){
    let numero = Math.random()*20 ;
    console.log(Math.round(numero))
}

//EJERCICIO #Tema 6
let Arr = [];
for (i = 10; i <= 20; i++){
    Arr.push(i)
}
console.log(Arr)


//EJERCICIO 1 y 2  #Tema 7

//archivo Coche.js que esta en el repositorio


//EJERCICIO1 #Tema 8 FUNCIONES

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => {
    if (b === 0){
        throw " el divisor debe ser diferente de 0";
    }
    return Math.round(a / b) 
}

console.log(suma(4,5))
console.log(resta(4,5))
console.log(multiplicacion(4,5))
console.log(division(8,4))
console.log(division(8,0))

//EJERCICIO2 #Tema 8 FUNCIONES 

const eliminarElemento = (cadena) => {
    if(!Array.isArray(cadena)){
        throw "el elemento ingresado no es un array"
    }
    cadena.pop();
    return cadena;
}

console.log(eliminarElemento([1,2,3,8]))
//EJERCICIO #Tema 2 
//EJERCICIO #Tema 2 
