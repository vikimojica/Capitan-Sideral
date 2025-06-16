//juego Capitan Sideral
console.log("El script se esta ejecutando")
let nombre = prompt("Estas a punto de iniciar una misión espacial, para entrar a la nave debes ingresar tu nombre");
alert(`Bienvenido a la nave espacial, Capitan ${nombre}. Nos esperan días de supervivencia. ¿Estas listo? Vamos a explorar la galaxia`);

let oxigeno = 10;
let energia = 10;
let comida = 10;
let dia = 1;
let jugando = true;

function estadoNave() {
    alert(`Día ${dia}\n Estado actual:\n- Oxígeno: ${oxigeno}\n- Energía: ${energia}\n- Comida: ${comida}`);
}

function elegirOpcion() {
    let opcion = prompt(
        `Capitan ${nombre}, tiene que tomar una desición ¿Por donde comenzamos?\n
        1 - Estoy viendo un planeta cercano, vamos a explorarlo!\n
        2 - Debemos reparar el sistema de energía para comenzar nuestra exploración\n 
        3 - Considero que debemos descansar, necesito recuperar fuerza`
    );


switch (opcion) {
    case "1":
        alert("Capitan, hemos encontrado nuestro primer planeta, mis ojos no creen lo que ven. ¡Hay comida!"); //Aqui me gustaria agregar descubrimientos, insignias y experiencia, tambien que pudieran explorar el planeta a profundidad
        comida += Math.floor(Math.random() * 3);
        energia -= 3;
        oxigeno -= 2;
        break;

    case "2":
        alert("Bueno Capitan... hemos acabado por hoy, el sistema esta funcionando a la perfección.");
        energia += 4;
        comida -= 2;
        oxigeno -= 2;
        break;

    case "3":
        alert("El descanso es necesario... estoy renovado, calme mi sueño pero no mi sed de aventuras");
        energia += 2;
        oxigeno -= 1;
        break;

    default:
        alert("Opción inválida. Perdiste un turno.");
        energia -= 1;
}

 dia++;

  if (oxigeno <= 0 || energia <= 0 || comida <= 0) {
    alert("🚨 Has perdido, capitán. Uno de tus recursos se ha agotado.");
    jugando = false;
  }
}

while (jugando) {
  estadoNave();
  elegirOpcion();
}

alert(`Fin del juego, Capitán ${nombre}. Sobreviviste ${dia - 1} días`);

