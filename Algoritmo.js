const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'sueldo',
    message: '¿Cuál es su sueldo base?',
},{
    name: 'primeraVenta',
    message: '¿Cuál es el valor de su primera venta?',
},
{
    name: 'segundaVenta',
    message: '¿Cuál es el valor de su segunda venta?',
},
{
    name: 'terceraVenta',
    message: '¿Cuál es el valor de su tercera venta?',
}])
 .then(answers => {
     var comision = Number(answers.primeraVenta) * 10/100 + Number(answers.segundaVenta) * 10/100 + Number(answers.terceraVenta) * 10/100;
     var sueldoMasComision = Number(answers.sueldo) + comision;
     console.log('Respuestas:')
     console.log('Comisión total:', comision, 'BsF')
     console.log('Sueldo báse más comisiones:', sueldoMasComision, 'BsF')
 })