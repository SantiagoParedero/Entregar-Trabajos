import * as rs from "readline-sync"

const participantes: number= rs.questionInt("Ingrese cantidad de participantes: ");
let counter: number= 0;
let puntajeMayor: number = 0;
let participanteGanador: number = 0;
let empate: boolean = false;


let calcularPuntaje = (sabor: number, presentacion: number, dificultad: number) : number =>{
    let puntajeTotal: number = sabor + presentacion + dificultad;
    return puntajeTotal;
}

let determinarGanador=(): void => {
    for(counter=1; counter <=participantes; counter++){
        let sabor:number = rs.questionInt ("Ingrese la puntuacion del sabor de la torta ");
        let presentacion:number = rs.questionInt ("Ingrese la puntuacion de la presentancion: ");
        let dificultad:number = rs.questionInt ("Ingrese la puntuacion de la dificultad: ");
        let puntajeActual: number = calcularPuntaje (sabor, presentacion, dificultad);
        if (puntajeActual == puntajeMayor){
            empate = true;
        }
        if (puntajeActual > puntajeMayor){
            empate = false;
            puntajeMayor = puntajeActual;
            participanteGanador = counter;
    }
}
}
determinarGanador();
if (empate){
    console.log("Hubo empate.")
} else {
    console.log("El ganador es el participante: ", participanteGanador);
    console.log("Con una puntuacion de: ", puntajeMayor);
}

