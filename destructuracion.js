const Jugador = {
    nombre: 'Steve',
    experiencia: 12,
    inventario: {
        herramienta: 'Pico de diamante',
        comida: 'Manzana dorada',
        bloques: 64
    }
};

const {nombre, inventario: {herramienta}} = Jugador;
console.log(`${nombre} esta usando su ${herramienta}.`);

const nuevoObjeto = "Antorcha"
const NuevoInventario = {...Jugador.inventario, nuevoObjeto};
console.log(NuevoInventario);