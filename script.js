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
        "Capitan ${nombre}, tiene que tomar una desición ¿Por donde comenzamos?" + 
        "1 - Estoy viendo un planeta cercano, vamos a explorarlo!" +
        "2 - Debemos reparar el sistema de energía para comenzar nuestra exploración" +
        "3 - Considero que debemos descansar, necesito recuperar fuerza"
    );
}

 switch (decision) {
    case "1":
      alert("Has explorado un planeta. ¡Encontraste algo útil!");
      comida += Math.floor(Math.random() * 3);  // 0 a 2
      energia -= 3;
      oxigeno -= 2;
      break;

    case "2":
      alert("Reparaste parte del sistema de energía.");
      energia += 4;
      comida -= 2;
      oxigeno -= 2;
      break;

    case "3":
      alert("Descansaste bien, pero perdiste recursos.");
      energia += 2;
      comida -= 2;
      oxigeno -= 1;
      break;

    default:
      alert("Opción inválida. Perdiste un turno.");
      energia -= 1;
  }

