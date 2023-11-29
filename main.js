class Consulta {
    nombre;
    telefono;
    mail;
    mensaje;
    numeroConsulta;

    constructor(nombre, telefono, mail, mensaje, numero) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.mail = mail;
        this.mensaje = mensaje;
        this.numeroConsulta = numero;
    }
}

let consulta = false;
let listaConsultas = [];
do {
    let ingreso = prompt("Bienvenido al area de consultas, si desea consultar por una consulta ya realizada, ingrese 'realizada' , si desea ingresar una nueva consulta ingrese 'nueva'");
    if (ingreso != null) {
        if (ingreso.toLocaleLowerCase() == "nueva") {
            let nombre = pedirNombre();
            let telefono = pedirTelefono();
            let mail = pedirMail();
            let men = mensaje();
            let numero = ingresoNumeroConsulta()
            let nuevaConsulta = new Consulta(nombre, telefono, mail, men, numero);
            let encontrado = false;
            for (co of listaConsultas) {
                if (co.nombre === nombre && co.numeroConsulta === numero) {
                    encontrado = true;
                }
            }
            if (encontrado) {
                alert("Ya existe ese numero de consulta para ti");
            } else {
                listaConsultas.push(nuevaConsulta);
                alert("Consulta ingresada con exito");
            }
        } else if (ingreso.toLocaleLowerCase() == "realizada") {
            let valido = false;
            let numeroConsultaPropia;
            let encontroConsulta = false;
            do {
                numeroConsultaPropia = +prompt("Ingrese el numero de la consulta buscada");
                if (numeroConsultaPropia != null && numeroConsultaPropia != NaN) {
                    valido = true;
                } else {
                    alert("Ingrese un numero valido");
                }
            } while (!valido);
            let nombrePropio = pedirNombre();
            for (consultaActual of listaConsultas) {
                if (consultaActual.nombre === nombrePropio && consultaActual.numeroConsulta === numeroConsultaPropia) {
                    alert(nombrePropio + " Su consulta numero " + numeroConsultaPropia + " contenia el siguente mensaje: " + "\n" + consultaActual.mensaje);
                    encontroConsulta = true;
                }
            }
            if (encontroConsulta == false) {
                alert("No pudimos encontrar la consulta que esta buscando.");
            }
        }
    }
    console.log(consulta);
} while (!consulta)

function pedirNombre() {
    let valido = false;
    let nombre = ""
    while (!valido) {
        nombre = prompt("Porfavor ingrese su nombre completo");
        if (nombre != null && nombre != "") {
            valido = true;
        } else {
            alert("Porfavor ingrese un nombre valido");
        }
    }
    return nombre;
}

function pedirTelefono() {
    let valido = false;
    let telefono = "";
    while (!valido) {
        telefono = prompt("Ingrese su telefono porfavor");
        if (telefono != null && telefono != "") {
            telefono = parseInt(telefono);
            valido = true;
        } else {
            alert("Porfavor ingrese un telefono valido");
        }
    }
    return telefono;
}

function pedirMail() {
    let valido = false;
    let mail = ""
    while (!valido) {
        mail = prompt("Porfavor ingrese su mail");
        if (mail != null && mail != "") {
            valido = true;
        } else {
            alert("Porfavor ingrese un mail valido");
        }
    }
    return mail;
}

function mensaje() {
    let valido = false;
    let mensaje = ""
    while (!valido) {
        mensaje = prompt("Porfavor ingrese el mensaje deseado");
        if (mensaje != null && mensaje != "") {
            valido = true;
        } else {
            alert("Porfavor ingrese un mensaje");
        }
    }
    return mensaje;
}
function ingresoNumeroConsulta() {
    let valido = false;
    let numero = "";
    while (!valido) {
        numero = prompt("Ingrese cual es el numero de su consulta. Si esta es su primer consulta ingrese 1, si es su segunda ingrese 2 y asi");
        if (numero != "" && numero != null) {
            numero = parseInt(numero);
            valido = true;
        } else {
            alert("Porfavor ingrese un numero valido");
        }
    }
    return numero;
}