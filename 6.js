const generarContraseña = () => {
    let contraseña = "";

    for (let index = 0; index < 6; index++) {
        
        contraseña+= (Math.floor(Math.random()*10));
    }

    return contraseña;
};

console.log(generarContraseña());
console.log(generarContraseña());
console.log(generarContraseña());