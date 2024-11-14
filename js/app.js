let segundos = 0;
let estaPausado = false;
let intervalo; 

function IniciarCronometro() {
    console.log('desde IniciarCronometro');
    const cronometro = document.querySelector('p'); 
    console.log(cronometro);

    // Agregar condicion logica
    if (BotonIniciar.innerHTML === 'Reiniciar') {
        // ClearInterval detiene el Intervalo
        clearInterval(intervalo); 
        segundos = 0; 
        cronometro.innerHTML = '0:00'; 
        BotonIniciar.innerHTML = 'Iniciar'; 
        return; 
    }

    BotonIniciar.innerHTML = 'Reiniciar'; 

    intervalo = setInterval(() => {
        segundos++;
        let minutos = Math.floor(segundos / 60);
        let segundosRestantes = segundos % 60;

        // Mostrar los minutos
        // Agregamos condicion logica (var < 10 ? '0' : '') para que el resto de la division mientras sea menor a 10 se agregue un cero adelante de los segundos 
        cronometro.innerHTML = minutos + ':' + (segundosRestantes < 10 ? '0' : '') + segundosRestantes;
    }, 1000); 
}

function PausarCronometro() {
    const cronometro = document.querySelector('p');
    const BotonIniciar = document.querySelector('.btn-primary');
    const BotonPausar = document.querySelector('.btn-secondary'); 

    if (estaPausado) {
        // true = Si el cronómetro está pausado lo despausamos siguiendo con el setInterval
        intervalo = setInterval(() => {
            segundos++; 

            let minutos = Math.floor(segundos / 60);
            let segundosRestantes = segundos % 60;

            cronometro.innerHTML = minutos + ':' + (segundosRestantes < 10 ? '0' : '') + segundosRestantes;
        }, 1000);

        BotonPausar.innerHTML = 'Pausar';
        BotonIniciar.innerHTML = 'Reiniciar'; 
        estaPausado = false; 
    } else {
        // false = Pausar cronometro con el clearInterval
        clearInterval(intervalo); 
        BotonPausar.innerHTML = 'Reanudar'; 
        estaPausado = true;
    }
}


const BotonIniciar = document.querySelector('.btn-primary');
BotonIniciar.addEventListener('click', IniciarCronometro); 
const BotonPausar = document.querySelector('.btn-secondary');
BotonPausar.addEventListener('click', PausarCronometro);
