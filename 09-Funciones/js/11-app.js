const aprediendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprediendo('JavaScript', 'Node.js');

// Arrow function
const aprediendo2 = (tecnologia) => `Aprediendo ${tecnologia}`;
// o solo funciona cuando es un parametro ->
// const aprediendo2 = tecnologia => `Aprediendo ${tecnologia}`;

console.log(aprediendo2('VueJS'));