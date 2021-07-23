//Reto Piedra papel o tijera

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";
valores = [op1, op2, op3];
var aleatorio = Math.random();

function numCPU(aleatorio) {
    if(aleatorio <0.1 ){
        return 0;
    } else if(aleatorio >= 0.1 && aleatorio < 0.15 ) {
        return (Math.floor(aleatorio*10));
    }
    else if(aleatorio >= 0.15 && aleatorio <= 0.2 ) {
        return (Math.ceil(aleatorio*10));
    }
    else if(aleatorio >= 0.21 && aleatorio <= 0.2999) {
        return (Math.floor(aleatorio*10));
    }
    else if(aleatorio>0.2){
        return (Math.ceil(aleatorio));
    }
}

var cpu = valores [numCPU(aleatorio)];

var user =  prompt("Escribe piedra, papel o tijera para jugar!");

function resultado(cpu, user) {
    
    if(cpu === user ){
        console.log("cpu: " +cpu);
        console.log("Empate");
    }

    if(cpu != user){
        
        if(cpu === op1 && user === op2 ){
            console.log("cpu: " + cpu);
            console.log("El papel envuelve a la piedra, ganaste!");
        }

        if(cpu === op1 && user === op3 ){
            console.log("cpu: " + cpu);
            console.log("La piedra destruye a la tijera, perdiste!");
        }

        if(cpu === op2 && user === op1 ){
            console.log("cpu: " + cpu);
            console.log("El papel envuelve a la piedra, perdiste!");
        }

        if(cpu === op2 && user === op3 ){
            console.log("cpu: " + cpu);
            console.log("La tijera corta el papel, ganaste!");
        }

        if(cpu === op3 && user === op2 ){
            console.log("cpu: " + cpu);
            console.log("La tijera corta el papel, perdiste!");
        }


        if(cpu === op3 && user === op1 ){
            console.log("cpu: " + cpu);
            console.log("La piedra destruye a la tijera, ganaste!");
        }


    }
}

resultado(cpu, user);
