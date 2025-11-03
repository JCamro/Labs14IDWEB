const calcularDistancia = (x1,y1,x2,y2) => {
    return Math.sqrt((x1-x2)**2 + (y1-y2)**2);
};

const distanciaAlOrigen = (x, y) => {
    return Math.sqrt(x**2 + y**2);
};


const ejercicio7 = (x1, y1, x2, y2) => {
    console.log("Distancia entre puntos: "+calcularDistancia(x1,y1,x2,y2));
    console.log("Distancia al origen punto 1: "+distanciaAlOrigen(x1,y1));
    console.log("Distancia al origen punto 2: "+distanciaAlOrigen(x2,y2));
    console.log("Suma de distancias: "+distanciaAlOrigen(x2,y2)+distanciaAlOrigen(x1,y1));
}

console.log(ejercicio7(1, 18, 12, 100));
console.log(ejercicio7(3, 8, 12, 12));