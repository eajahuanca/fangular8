const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json', 'utf8'));

//numero de paises
console.log(`Numero de regsitros: ${paises.length}`);

//filtro por subregion
const subAmerica = paises.filter((pais) => {
    return pais.subregion === 'South America';
});
//console.log(subAmerica);

//lista de paises subamericamos
subAmerica.forEach(pais => {
    console.log(pais.name);
});

console.log(`Cantidad de paises subamericanos: ${subAmerica.length}`);

let poblaciones = [];
//lista de paises
subAmerica.forEach( pais => {
    poblaciones.push({
        nombre: pais.name,
        capital: pais.capital,
        poblacion: pais.population
    })
});
console.log('----------poblaciones---------')
console.log(poblaciones);
poblaciones.sort((p1, p2) => (p1.poblacion>p2.poblacion?1:(p2.poblacion>p1.poblacion?-1:0)));

console.log(poblaciones);

console.log('----- top 10 de paises------');
paises.sort((a,b) => (a.population<b.population?1:(b.population<a.population?-1:0)));
paisesTop = [];
let contador = 0;
paises.forEach(pais => {
    if(contador++<10){
        paisesTop.push({
            nombre: pais.name,
            capital: pais.capital,
            poblacion: pais.population
        })
    }
});

console.log(paisesTop);