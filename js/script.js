console.warn('Por menos de 5 pedidos no hay envíos a domicilio.')

let cantidadDePedidos = 0;
let continuarPedido;
let opcionVeg;

let numAleatorio = Math.random();
let numMin = 1000;
let numMax = 9999;
let codigoDeRetiro = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

let totalAPagar = 0;
function suma(numASumar) {
    totalAPagar = totalAPagar + numASumar;
}
function multip(numAMultip) {
    totalAPagar = totalAPagar * numAMultip;
}

const sandwichVeg1 = {id: 0, producto: 'Queso y Tomate', precio: 1900};
const sandwichVeg2 = {id: 1, producto: 'Huevo y Queso', precio: 2150};
const sandwichVeg3 = {id: 2, producto: 'Queso Crema y Pepino', precio: 2200};
const sandwichVeg4 = {id: 3, producto: 'Queso y Albóndigas Vegetarianas', precio: 2400};

const sandwich1 = {id: 0, producto: 'Jamón y Queso', precio: 1800};
const sandwich2 = {id: 1, producto: 'Pollo, Queso y Tomate', precio: 2500};
const sandwich3 = {id: 2, producto: 'Lomo completo', precio: 2800};
const sandwich4 = {id: 3, producto: 'Hamburguesa simple', precio: 2650};
const sandwich5 = {id: 4, producto: 'Hamburguesa completa', precio: 3000};
const sandwich6 = {id: 5, producto: 'Hamburguesa doble', precio: 3200};

const pastel1 = {id: 0, producto: 'Pastel de chocolate', precio: 6400};
const pastel2 = {id: 1, producto: 'Pastel de limón', precio: 6600};
const pastel3 = {id: 2, producto: 'Pastel de frutos Rojos', precio: 7000};

do {
    let tipoDePedido = prompt('Si desea ordenar algunos de nuestros sandwiches ingrese una "S". Si por el contrario desea ordenar algunos de nuestros pasteles ingrese una "P".');

    if (tipoDePedido === 'S') {

        opcionVeg = confirm('¿Desea ver las opciones vegetarianas?');

        if (opcionVeg) {

            let pedidoVeg = parseInt(prompt('Ingresa el número del producto que desees. (0-3)'));
            const productoVeg = [sandwichVeg1, sandwichVeg2, sandwichVeg3, sandwichVeg4];

            let cantidadDelProductoVeg = parseInt(prompt('Ingresa la cantidad de sandwiches que desees de este tipo.'));

            suma(productoVeg[pedidoVeg].precio);

            multip(cantidadDelProductoVeg);

            cantidadDePedidos = cantidadDePedidos + cantidadDelProductoVeg;

        }

        else {
            let pedidoComun = parseInt(prompt('Ingresa el número del producto que desees. (0-5)'));
            const productoComun = [sandwich1, sandwich2, sandwich3, sandwich4, sandwich5, sandwich6];

            let cantidadDelProductoComun = parseInt(prompt('Ingresa la cantidad de sandwiches que desees de este tipo.'));

            suma(productoComun[pedidoComun].precio);

            multip(cantidadDelProductoComun);

            cantidadDePedidos = cantidadDePedidos + cantidadDelProductoComun;

        }

    } else if (tipoDePedido === 'P') {
        
        let pedidoPastel = parseInt(prompt('Ingrese el número del producto que desee. (0-2)'));
        const productoPastel = [pastel1, pastel2, pastel3];

        let cantidadDelProductoPastel = parseInt(prompt('Ingresa la cantidad de pasteles que desees de este tipo.'));

        suma(productoPastel[pedidoPastel].precio);

        multip(cantidadDelProductoPastel);

        cantidadDePedidos = cantidadDePedidos + cantidadDelProductoPastel;
        

    } else {

        alert('Esta entrada no fue válida');

    }

    continuarPedido = confirm('¿Quieres continuar comprando? Hasta ahora tienes ' + cantidadDePedidos + ' pedidos que suman un total de $' + totalAPagar + '.');

} while (continuarPedido) 
    
let formaDeRetiro = confirm('¿Vas a retirar el pedido en nuestro local?')

if (formaDeRetiro) {

    let nombre = prompt('Ingresa tu nombre.');
    let apellido = prompt('Ingresa tu apellido.');
    let numeroContacto = parseInt(prompt('Ingresa tu número de teléfono en caso de que surja algún imprevisto.'));

    console.log('Gracias por realizar tu pedido, ' + nombre + ' ' + apellido + '. Tu código de retiro es ' + codigoDeRetiro + ' y el monto total a pagar es de $' + totalAPagar + '. En caso de que surja algún imprevisto con tu pedido, nos contactaremos al ' + numeroContacto + '. Te esperamos con gusto en nuestro local.');

} else {
    if (cantidadDePedidos < 5) {

        console.log('No podemos hacer envíos a domicilio cuando se ordenan menos de 5 pedidos.');

    } else {
        let nombre = prompt('Ingresa tu nombre.');
        let apellido = prompt('Ingresa tu apellido.');
        let numeroContacto = parseInt(prompt('Ingresa tu número de teléfono en caso de que surja algún imprevisto.'));
        let direccion = prompt('Ingresa tu domicilio.')

        console.log('Gracias por realizar tu pedido, ' + nombre + ' ' + apellido + '. El domicilio establecido es ' + direccion + '. Tu código de retiro es ' + codigoDeRetiro + ' y el monto total a pagar es de $' + totalAPagar + '. En caso de que surja algún imprevisto con tu pedido, nos contactaremos al ' + numeroContacto + '. En unos minutos, nuestro personal se dirigirá a tu domicilio.');
    }
}