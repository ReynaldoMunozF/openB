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

//EJERCICIO #Tema 2 
//EJERCICIO #Tema 2 
