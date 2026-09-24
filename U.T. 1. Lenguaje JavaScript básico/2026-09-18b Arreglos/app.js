// Primera forma. Literal de arreglo

let diasSemana = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo'
];
console.clear();
console.log(diasSemana)
console.table(diasSemana) // Para que se muestre en tabla

// Segunda dorma. Indicando la posición

var frutas = [];
frutas[0] = 'Pera';
frutas[1] = 'Manzana';
frutas[2] = '🍌'
frutas[5] = 'Kiwi';
frutas[6] = '🍉';

console.log(frutas);
console.table(frutas);

// Tercera forma. Clase Array

const alumnos = new Array();

alumnos.push('José Iver');
alumnos.push('Francisco');
alumnos.push('Adrian', 'Aymen', 'Miguel');
alumnos.push('Daniel');
alumnos.unshift('Álvaro', 'Francisco 2');
// Operador spread
alumnos.push(...['Alexander', 'Belzunces'])

console.table(alumnos)

// Cuarta forma. Array asociativo

let mesesDelAnio = [];
mesesDelAnio['en'] = 'enero';
mesesDelAnio['fe'] = 'febrero';
mesesDelAnio['ma'] = 'marzo';
mesesDelAnio['ab'] = 'abril';
mesesDelAnio['my'] = 'mayo';
mesesDelAnio['ju'] = 'junio';
mesesDelAnio['jl'] = 'julio';
mesesDelAnio['ag'] = 'agosto';
mesesDelAnio['sp'] = 'septiembre';
mesesDelAnio['oc'] = 'octubre';
mesesDelAnio['nv'] = 'noviembre';
mesesDelAnio['di'] = 'diciembre';

console.table(mesesDelAnio);
console.log(mesesDelAnio['ma']);