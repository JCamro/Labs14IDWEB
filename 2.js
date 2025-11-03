const numeroAleatorio = (min, max) => {
    return Math.round((Math.random()*(max-min+1))+min);
}

console.log(numeroAleatorio(10,20));
console.log(numeroAleatorio(7,100));
console.log(numeroAleatorio(7,8));