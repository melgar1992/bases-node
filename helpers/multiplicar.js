const fs = require('fs');
require('colors')
const crearArchivo = async (base = 5, l = false, hasta = 10) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i} \n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i} \n`;
        }
        if (l) {
            console.log('================');
            console.log(`  Tabla del: ${base} hasta ${hasta}`);
            console.log('================');

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base} creado`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo,
}