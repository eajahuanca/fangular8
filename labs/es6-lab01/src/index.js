//pagina 2
//ES6 factorial de un numero
/*
factorial = (num) => {
    if(num<=0) return 1;
    else return (num * factorial(num - 1))
}
console.log(factorial(6));

//ES6 numerico
const tipo_cambio = new Number('6.96');
console.log(tipo_cambio*2);

//ES6 Objetos
const alumnos = {
    nombre : 'Edwin',
    apellido: 'Ajahuanca',
    edad: () => { return 30 } ,
};

console.log(alumnos.nombre);
console.log(alumnos.apellido);
console.log(alumnos.edad());

//ES6 boolean
const val = new Boolean('1');
if(val.value) console.log('es verdadero');

//ES6 String
const descripcion = new String("porcentaje 10%");
console.log(descripcion.toUpperCase());

//ES6 plantillas
const mensaje = () => { return 'plantilla' };
const parametro = '100%';
console.log(`el parametro es ${parametro} de la ${mensaje()}`);

//pagina 3
//ES6 array
const cursos = ['nodejs','angular','react','mongodb','sql'];
cursos.splice(2,0,'postgres'); //agregando
console.log(cursos);

const eliminado = cursos.splice(3,1) //elimina
console.log(`${cursos} elemento eliminado ${eliminado}`);

cursos.push('ms-sqlserver'); //agrega al final
console.log(cursos);

//adicionando un objeto
const alumnosx = [];
alumnosx.push({"heroe":"iron man", "poder":"tecnologia"},{"heroe":"tor", "poder":"martillo"});
cursos.push(alumnosx);
console.log(cursos);

//funcion find
const solocurso = cursos.find(elemento => elemento == 'angular');
if(solocurso) console.log(`curso encontrado : ${solocurso}`);
*/
const miobjeto = [{
    "x": "mi primer valor",
    "y": "mi segundo valor",
    "z": "mi tercer valor",
    "obj": [
        {
            "heroe":"iron man",
            "poder": "tecnologia"
        },
        {
            "heroe":"tor",
            "poder": "martillo"
        },
        {
            "heroe":"hulk",
            "poder": "fuerza"
        }
    ]
}];

const poderes = miobjeto.filter(e => e.obj.heroe).poder;
//const poder_heroe = cursos.find(ele => ele.alumnosx.heroe ==='tor').poder;
console.log(miobjeto);
console.log(poderes);


const roles = new Map([
    ['r1', 'usuario1'],
    ['r2', 'usuario2'],
    ['r3', 'usuario3'],
    ['r4', 'usuario4']
]);

console.log(roles.get('r2'));

//console(miobjeto.get("obj"));

sum = (x,y,z) => {
    return x+y+z;
}
const numbers = [1,2,3];
console.log(...numbers);

const arr = [1,2,3];
const arr1 = [...arr];
arr1.push(4);
console.log(arr1);


var obj = [
    { nombre: 'Ana', edad: 90},
    { nombre: 'Juan', edad: 12},
    { nombre: 'Jorge', edad: 54},
    { nombre: 'Luis', edad: 4}
];

/*compara = (a,b) => {
    if(a.edad < b.edad){
        return -1;
    }
    if(a.edad>b.edad){
        return 1;
    }
    return 0;
}*/
obj.sort((a,b) => (a.edad>b.edad) ? 1:((b.edad>a.edad) ? -1:0));

console.log("--------------");
console.log(obj);