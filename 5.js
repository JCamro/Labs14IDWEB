const gradosARadianes = (grados) => {
    radianes = grados * (Math.PI/180);
};

const radianesAGrados = (radianes) => {
    grados = radianes * (180/Math.PI);
};

let angulo1grados = 60; 
let angulo2radianes = Math.PI; 

console.log("Angulo1: "+angulo1grados+"\nCoseno: "+Math.cos(angulo1grados)+"\nSeno: "+Math.sin(angulo1grados));
console.log("Angulo2: "+angulo2radianes+"\nCoseno: "+Math.cos(angulo2radianes)+"\nSeno: "+Math.sin(angulo2radianes));