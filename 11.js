class Figura {
    area(){

    }

    perimetro() {

    }
}

class Cuadrado extends Figura {
    lado;
    constructor(lado) {
        this.lado = lado;
    }

    area() {
        return this.lado**2;
    }
    perimetro() {
        return this.lado*4;
    }
}

class Triangulo extends Figura {
    base;
    altura;
    constructor(base, altura)  {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base*this.altura*0.5;
    }

    perimetro() {
        return 
    }
}