class Producto {
    
    #precio;
    #stock;
    #nombre;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    venta(cantidad) {
        if (cantidad>this.#precio) {
            console.log("No se pudo realizar la venta, no hay stock suficiente");
            return;
        }

        this.#stock-=cantidad;
        console.log("Se realizo la venta correctamente");
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }
    
    set precio(precio) {
        if (precio<0) {
            console.log("No se coloco el precio, el argumento debe de ser positivo");
            return;
        }
        
        this.#nombre = nombre;
    }
    
    set stock(cantidad) {
        if (cantidad<0) {
            console.log("No se coloco el stock, el argumento debe de ser positivo");
            return;
        }
        this.#stock = cantidad;
    }
}

const arroz = new Producto("Arroz", 1.2, 100);

arroz.venta(101);
arroz.venta(90);

arroz.precio = -12;
arroz.precio = 2;

arroz.stock = (-23);
arroz.stock = (1000);