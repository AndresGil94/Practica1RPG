class Zombie {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
 
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

class Abominacion extends Zombie {
    ataqueMultiple(objetivo) {
        super.atacar(objetivo);
        super.atacar(objetivo);
        super.atacar(objetivo);
    }
}

let MAX_HP = 100;

class Jugador {

    constructor(nombre, ocupacion, puntosVida, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.setPuntosVida(puntosVida)
        this.faccion = faccion;
    }

    setPuntosVida(puntosVida) {
        if(puntosVida > MAX_HP) {
            this.puntosVida = 100;
        } else {
        this.puntosVida = puntosVida;
        }
    }

    toString() {
        console.log(`${this.nombre}, ${this.ocupacion} ${this.puntosVida}, ${this.faccion}`);
    }

}

let jugador = new Jugador("A", "B", 120, "C");
let jugador2 = new Jugador("A2", "B2", 99, "C2");
let abominacion = new Abominacion("Dummy", 200, 10);
abominacion.ataqueMultiple(jugador2.nombre);
jugador.toString();

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador) {
        if(this.poder + jugador.puntosVida > jugador.maxPuntosVida) {
        jugador.puntosVida = jugador.maxPuntosVida;
        } else {
            jugador.puntosVida = jugador.puntosVida + this.poder;
        }
    }
}


 
let manzana = new PlantaCurativa('Manzana', 5);
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);
console.log(ricardo.puntosVida);


function compare( a, b ) {
    if ( a.puntuacion > b.puntuacion ){
      return -1;
    }
    if ( a.puntuacion < b.puntuacion ){
      return 1;
    }
    return 0;
  }

function ejercicio4(arrayPuntuaciones) {
    let aux = [...arrayPuntuaciones];
   aux = aux.sort(compare);
   aux = aux.filter(a => a.puntuacion > 100);
   
   return aux;
}


let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

console.log(puntuaciones);
console.log(ejercicio4(puntuaciones));