let edad = parseInt(prompt("ingrese su edad:"))
if (edad>=0 && edad<=12) {
    console.log(`su edad es ${edad} entonces eres un niño`);
}else if (edad>=13 && edad<=19) {
    console.log(`su edad es ${edad} entonces eres un adolecente`);
}else if (edad>=20 && edad<=59) {
    console.log(`su edad es ${edad} entonces eres un adulto`);
}else if (edad>=60) {
    console.log(`su edad es ${edad} entonces eres un adulto mayor`);
}else if (edad<0) {
    console.log("ingrese una edad mayor que cero")
}