class Torta {
    static id = 0;
    constructor(nombre, precio, cantidad, img){
        this.id = ++Torta.id; // SUMA 1 A CADA ID QUE SE VA ASIGNANDO
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.img = img;
    }
}

let carrito = [];
totalAPagar = 0;

const almendrado = new Torta('Almendrado', 3500, 0, 'almendrado.jpg')
const brownie = new Torta('Brownie y Merengue', 2800, 0, 'brownie.jpg')
const eclaire = new Torta('Eclaire', 1000, 0, 'eclaire.jpg')
const flan = new Torta('Flan', 3500, 0, 'flan.jpg')
const frutosr = new Torta('Frutos Rojos', 4200, 0, 'frutos-rojos.jpg')
const lemon = new Torta('Lemon Pie', 4200, 0, 'lemon-pie.jpg')
const maicena = new Torta('Alfajores de Maicena', 750, 0, 'maicena.jpg')
const mani = new Torta('Chocolate y Mantequilla de Maní', 4000, 0, 'mani.jpg')
const maracuya = new Torta('Mousse de Maracuyá', 4200, 0, 'maracuya.jpg')
const marquise = new Torta('Marquise', 4500, 0, 'marquise.jpg')
const mixto = new Torta('Mousse de Chocolate Mixto', 4600, 0, 'mixto.jpg')
const pastelera = new Torta('Frutilla y Crema Pastelera', 4700, 0, 'pastelera.jpg')
const rogel = new Torta('Rogel', 5000, 0, 'rogel.jpg')
const scons = new Torta('Scons', 650, 0, 'scons.jpg')
const tiramisu = new Torta('Tiramisú', 4400, 0, 'tiramisu.jpg')

const tortas = [almendrado, brownie, eclaire, flan, frutosr, lemon, maicena, mani, maracuya, marquise, mixto, pastelera, rogel, scons, tiramisu];

setTimeout(function () {
    let contenedorInicial = document.createElement('div');
    contenedorInicial.classList.add('contenedor-inicial');
    
    let textoInicial = document.createElement('p');
    textoInicial.classList.add('texto-inicial');
    textoInicial.innerText = `ESCOGE TUS POSTRES PREFERIDOS DE LA PASTELERÍA TRADICIONAL`

    contenedorInicial.appendChild(textoInicial);
    document.body.insertBefore(contenedorInicial, document.querySelector('.contenedor'));
}, 2500)



function mostrarTortas() {

    // CONTENEDOR CENTRAL QUE CONTIENE LAS GRILLAS
    let contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');

    for (const torta of tortas) {

        // CONTENEDOR INDIVIDUAL DE CADA TORTA CON SUS ELEMENTOS
        let contenedorTorta = document.createElement('div');
        contenedorTorta.classList.add('contenedor-torta');

        // IMAGEN DE LA TORTA
        let imagenTorta = document.createElement('img');
        imagenTorta.classList.add('imagen-torta');
        imagenTorta.src = `../proyecto-js-valentin.abdala/img/${torta.img}`;
        imagenTorta.alt = torta.nombre;

        // NOMBRE Y PRECIO
        let infoTorta = document.createElement('h4');
        infoTorta.classList.add('info-torta');
        infoTorta.innerText = `${torta.nombre} - $${torta.precio}`;

        // BOTONES PARA SUMAR Y RESTAR CANTIDADES AL CARRITO
        let botonSuma = document.createElement('button');
        botonSuma.classList.add('agregar');
        botonSuma.innerText = `+`;

        // FUNCIONALIDAD BOTÓN SUMA 
        botonSuma.addEventListener('click', function() {
            let indexSuma = tortas.indexOf(torta);

            tortas[indexSuma].cantidad = tortas[indexSuma].cantidad + 1;
            carrito.push(tortas[indexSuma])
            totalAPagar = totalAPagar + torta.precio;

            mostrarCarritoEnTexto();
        })

        contenedorTorta.appendChild(imagenTorta);
        contenedorTorta.appendChild(infoTorta);
        contenedorTorta.appendChild(botonSuma);
        contenedor.appendChild(contenedorTorta);
    }

    document.body.appendChild(contenedor);
}

mostrarTortas();

// CARRITO EN TEXTO
let carritoTexto = document.createElement('h1');
carritoTexto.classList.add('info-pago');
document.body.appendChild(carritoTexto);
let montoTexto = document.createElement('h1');
montoTexto.classList.add('info-pago');
document.body.appendChild(montoTexto);

function mostrarCarritoEnTexto() {
    if (carrito.length === 0) {
        carritoTexto.innerText = `El carrito está vacío\n`;
        montoTexto.innerText = `El total a pagar es $0`
    } else {
        let contenidoCarrito = 'El carrito lleva:\n';
        carrito.forEach((item) => {
            contenidoCarrito = contenidoCarrito + `${item.nombre} - $${item.precio}\n`;
        });
        let contenidoMonto = 'El total a pagar es $' + totalAPagar;
        carritoTexto.innerText = contenidoCarrito;
        montoTexto.innerText = contenidoMonto;
    }
}
mostrarCarritoEnTexto();

let contenedorBotones = document.createElement('div');
contenedorBotones.classList.add('contenedor-botones');

// BOTÓN FINALIZAR COMPRA
let botonComprar = document.createElement('button');
botonComprar.classList.add('botones');
botonComprar.innerText = `Finalizar Compra`;

botonComprar.addEventListener('click', () => {
    if (totalAPagar < 1000) {
        Swal.fire({
            text: 'Tu pedido es muy pequeño para finalizarlo',
            icon: 'error',
            confirmButtonText: 'Continuar comprando',
            timer: 5000
        });
    } else {
        Swal.fire({
            text: 'Tu pedido se ha concretado con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 5000
        });
    }
})

contenedorBotones.appendChild(botonComprar);

// BOTÓN QUITAR DEL CARRO
let botonSacar = document.createElement('button');
botonSacar.classList.add('botones');
botonSacar.innerText = `Quitar Último Item Agregado`;

botonSacar.addEventListener('click', function() {
    if (carrito.length > 0) {
        let ultimoItem = carrito.pop();
        totalAPagar = totalAPagar - ultimoItem.precio;

        mostrarCarritoEnTexto();
    }
    Swal.fire({
        title: 'Item quitado',
        icon: 'success',
        position: 'top-end',
        width: 300,
        toast: true,
        timer: 6000,
        showConfirmButton: false,
        background: 'indianred'
    });
})
contenedorBotones.appendChild(botonSacar);

// FUNCIÓN PARA GUARDAR EL CARRITO EN LOCAL STORAGE
function guardarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('totalAPagar', totalAPagar);
}

// FUNCIÓN PARA CARGAR EL CARRITO DESDE EL LOCAL STORAGE
function cargarLocalStorage() {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    totalAPagar = localStorage.getItem('totalAPagar');
    console.log(carrito);
}

// BOTÓN PARA VACIAR EL CARRITO
let botonVaciar = document.createElement('button');
botonVaciar.innerText = `Vaciar Carro`;
botonVaciar.classList.add('botones')
contenedorBotones.appendChild(botonVaciar);

botonVaciar.addEventListener('click', function() {
    carrito = [];
    totalAPagar = 0;
    mostrarCarritoEnTexto();
    Swal.fire({
        title: 'Carrito vaciado',
        icon: 'success',
        position: 'top-end',
        width: 300,
        toast: true,
        timer: 6000,
        showConfirmButton: false,
        background: 'indianred'
    });
})

// BOTÓN GUARDAR
let guardarCarrito = document.createElement('button');
guardarCarrito.innerText = `Guardar Carrito`;
guardarCarrito.classList.add('botones')
contenedorBotones.appendChild(guardarCarrito);

// BOTÓN CARGAR
let cargarCarrito = document.createElement('button');
cargarCarrito.innerText = `Cargar Carrito`;
cargarCarrito.classList.add('botones')
contenedorBotones.appendChild(cargarCarrito);

// FUNCIONALIDADES BOTONES GUARDAR Y CARGAR
guardarCarrito.addEventListener('click', function() {
    guardarLocalStorage();
    mostrarCarritoEnTexto();
    Swal.fire({
        title: 'Carrito guardado',
        icon: 'success',
        position: 'top-end',
        width: 300,
        toast: true,
        timer: 6000,
        showConfirmButton: false,
        background: 'indianred'
    });
})

cargarCarrito.addEventListener('click', function() {
    cargarLocalStorage();
    mostrarCarritoEnTexto();
    Swal.fire({
        title: 'Carrito cargado',
        icon: 'success',
        position: 'top-end',
        width: 300,
        toast: true,
        timer: 6000,
        showConfirmButton: false,
        background: 'indianred'
    });
})

// BOTÓN BORRAR LOCAL STORAGE
let borrarLocalSt = document.createElement('button');
borrarLocalSt.classList.add('botones');
borrarLocalSt.innerText = `Borrar Carrito Guardado`;

borrarLocalSt.addEventListener('click', function() {
    Swal.fire({
        text: '¿Estás seguro de borrar el carrito guardado?',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            Swal.fire({
                text: 'El carrito se ha borrado con éxito',
                icon: 'success',
                timer: 5000
            })
        } else {
            Swal.fire({
                text: 'Cancelado',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 5000
            })
        }
    })
})

contenedorBotones.appendChild(borrarLocalSt);

document.body.appendChild(contenedorBotones);