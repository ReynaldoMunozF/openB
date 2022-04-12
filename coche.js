class Coche {
    #peso ;
    #potencia ;
    #marca ;

    constructor (peso,potencia,marca) {
     
        this.#peso = this.validaSiEsNumero(peso) ;
        this.#potencia = this.validaSiEsNumero(potencia) ;
        this.#marca = this.validaSiEsTexto(marca) ;       
    }

    validaSiEsNumero(numero) {
       
        if (typeof(numero) !== "number") {
             throw "ingrese un numero valido"
        }
        return numero;
        
    }
    
    validaSiEsTexto(marca){
        if(typeof(marca) !== "string"){
            throw "ingrese una marca valida"    
        }
        return marca;
    }

    getPeso(){
        return this.#peso;
    }

    setPeso(peso){
        this.#peso =  this.validaSiEsNumero(peso)   
    }

    getPotencia(){
        return this.#potencia;
    }

    setPotencia(potencia){
        this.#potencia = this.validaSiEsNumero(potencia) ;
    }

    getMarca(){
        return this.#marca;
    }

    setMarca(marca){
        this.#marca = this.validaSiEsTexto(marca) ; 
    }
}

//let a = new Coche (10,52,"toyota")