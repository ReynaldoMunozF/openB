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

//EJERCICIO2 y 3 #Tema 8 FUNCIONES 

const eliminarElemento = (cadena) => {
    
    if(!Array.isArray(cadena) || 0 === cadena.length ) {
        throw "el elemento ingresado no es un array valido"
    }
    cadena.pop();
    return cadena;
}

console.log(eliminarElemento([1,2,3]))

//EJERCICIO 1  #Tema 9 CONTROL DE ERRORES 

const suma = (a,b) => {
        
    if(isNaN(a) || isNaN(b) ){
        throw TypeError("Numero invalido")
    }
    else return a + b;

}

//EJERCICIO 2 #Tema 9 CONTROL DE ERRORES

const suma2 = (a,b) => {
        
    if(isNaN(a) || isNaN(b) ){
        throw TypeError("Numero invalido");
    }
    else return a + b;

}

try{
let sumaFinal = suma2(1,2)
console.log(sumaFinal)

}
catch(mierror) {
throw Error("La calculadora esta fallando");
}

//EJERCICIO # 1 Tema sintaxis, variables y palabras 

let nombre = "reynaldo"
let edad = 36
let eresDesarrollador = true
let fechaNacimiento = new Date(1985, 10 ,14) 


const libroFavorit ={
    titulo : "caballo de troya" ,
    autor : "j.j. Benitez" ,
    anyo : 1984,
    url : "www.caballodetrya.com",

}

const lista = [nombre,edad,eresDesarrollador,fechaNacimiento,libroFavorit]
console.log(lista)

//EJERCICIO #Tema estructuras de control 
function factorialFor(numero) {
    resultado = 1
    for( i=1 ; i<=numero; i++){
        resultado*=i;
    }
    return resultado;
}

a = factorialFor(10);
console.log(a)

function factorialWhile(numero){
    resultado = 1;
    i = 1;
    while (i<=numero){
        resultado*=i;
        i++;
    }
    return resultado;
}
console.log(factorialWhile(10))

function factorialBreak(numero){
    resultado = 1;
    i = 1;
    while (true){
        if (i>numero){
            break;
        }
        resultado *=i;
        i++;
    }
    return resultado;
}
console.log(factorialBreak(10))

//EJERCICIO #Tema CADENA DE TEXTO
let nombre ="Reynaldo";
let apellido = "Mu??oz Flores";
let estudiante = `el nombre es ${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let tama??o = estudiante.length;
let primera = nombre.substring(0,1);
let final = nombre.substring(nombre.length-1);
let sinEspacios = estudiante.replace(/\s+/g,``);
let comprobacion = estudiante.includes(nombre);





console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(tama??o);
console.log(primera);
console.log(final);
console.log(sinEspacios);
console.log(comprobacion);


 
//EJERCICIO #Tema NUMEROS EN JAVASCRIPT


let altura = 180 ;
let alturaMetros = 1.80;
let peso = 116.50;
let alturaRedondeoArriba = Math.ceil(alturaMetros);
let alturaRedondeoAbajo = Math.floor(peso);
let mayorValorJs = Number.MAX_VALUE;
let textoMayorValor = `el m??ximo valor que se puede obtener en Javascript es ${mayorValorJs}`;


console.log(alturaRedondeoArriba);
console.log(alturaRedondeoAbajo);
console.log(mayorValorJs);
console.log(textoMayorValor);
