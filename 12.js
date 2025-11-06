class Usuario {
    nombre;
    email;

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        console.log("Nombre: "+this.nombre+"\nEmail: "+this.email);
    }
}

class Cliente extends Usuario {
    #fidelidad;
    
    constructor(nombre, email, fidelidad) {
        super(nombre, email);
        this.#fidelidad = fidelidad;
    }

    mostrarInfo() {
        console.log("Nombre: "+this.nombre+"\nEmail: "+this.email+"\nFidelidad: "+this.#fidelidad);
    }
}

class Administrador extends Usuario {
    constructor(nombre, email) {
        super(nombre, email);
    }

    mostrarInfo() {
        console.log("Nombre: "+this.nombre+"\nEmail: "+this.email+"\nFidelidad: ");
    }

    crear() {}
    editar() {}
    eliminar() {}
}