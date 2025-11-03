const generarDado = () => {return Math.floor((Math.random()*6)+1)};

let dado1 = generarDado();
let dado2 = generarDado();

console.log("Dado1: "+dado1+" Dado2: "+dado2+" Suma: "+(dado1+dado2));