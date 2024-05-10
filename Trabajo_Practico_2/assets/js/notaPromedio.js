let primerTrimestre = parseInt(prompt("Ingrese la nota del primer trimestre: "))
let segundoTrimestre = parseInt(prompt("Ingrese la nota del segundo cuatrimestre: "))
let tercerTrimestre = parseInt(prompt("Ingrese la nota del tercer trimestre: "))
let notaPromedio = (primerTrimestre+segundoTrimestre+tercerTrimestre)/3
switch (true) {
    case isNaN(notaPromedio):
        alert("ingrese notas validas")
        break;
    case notaPromedio>0 && notaPromedio<4:
        alert(`${notaPromedio}, Nota Insuficiente`)
        break;
    case notaPromedio>3 && notaPromedio<6:
        alert(`${notaPromedio}, Nota Regular`)
        break;
    case notaPromedio>5 && notaPromedio<8:
        alert(`${notaPromedio}, Nota Buena `)
        break;
    case notaPromedio>7 && notaPromedio<10:
        alert(`${notaPromedio}, Nota muy buena`)
        break;
    case notaPromedio==10:
        alert(`${notaPromedio}, Nota sobresaliente`)
        break;
    default:
        alert("el valor que ingreso no es valido")
}



