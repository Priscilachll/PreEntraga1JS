alert("BRUBANKERS");

let usuario = prompt("Ingrese su nombre: ");
alert("Bienvenido al centro de inversiones de BRUBANK, " + usuario + ". Estamos aquí para ayudarte.");

let pesos = parseFloat(prompt("Ingrese el monto que desea invertir: "));

let menu = 0;
while (menu < 1 || menu > 3) {
    menu = parseInt(prompt("Elija durante cuánto tiempo quiere invertir su dinero: \n1 - 1 mes \n2 - 3 meses \n3 - 12 meses"));
}

let ganancia = 0;

if (menu === 1) {
    ganancia = pesos + 200;
} else if (menu === 2) {
    ganancia = pesos + 500;
} else if (menu === 3) {
    ganancia = pesos + 2000;
}

alert("Después del período de inversión, su monto total será: " + ganancia);
