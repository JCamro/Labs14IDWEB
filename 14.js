class Empleado {
    nombre;
    sueldoBase;
    constructor(nombre, sueldoBase = 0) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
}

class Programador extends Empleado {
    lenguaje;
    constructor(nombre, sueldoBase = 0, lenguaje = 'JavaScript') {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase = 0, lenguaje = 'JavaScript') {
        super(nombre, sueldoBase, lenguaje);
    }

    calcularSueldo() {
        return super.calcularSueldo() + (this.sueldoBase * 0.15);
    }
}