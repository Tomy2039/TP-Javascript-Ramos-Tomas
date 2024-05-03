let num1 = parseInt(prompt("ingrese un numero:"))
let num2 = parseInt(prompt("ingrese un segundo numero:"))
let num3 = parseInt(prompt("ingrese un tercer numero"))
if (num1<num2 && num2<num3) {
    console.log(`los numeros ${num1}, ${num2}, ${num3} estan en forma ascendente`)
}else {
    console.log(`los numero ${num1}, ${num2}, ${num3} no estan de forma ascendente`)
}