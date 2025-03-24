const cofre = {
    ubicacion: 'Templo',
    contenido: {
        arma: 'Arco Encantado',
        casco: 'Armadura de Netherite',
        Obsidiana: 64
    }
};

const {ubicacion, contenido: {arma}} = cofre;
console.log(`El cofre se encuentra en ${ubicacion} contiene un ${arma}.`);

const nuevoObjeto = "Pico de Diamante"
const NuevoCofre = {...cofre.contenido, nuevoObjeto};
console.log(NuevoCofre);