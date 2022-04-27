const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
console.log(argv);

require('colors');

// const [,, arg = 'base=5'] = process.argv;
// const [,base = 5] = arg.split('=');

crearArchivo(argv.base, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
