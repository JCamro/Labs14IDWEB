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
        if (cantidad>this.#stock) {
            console.log("No se pudo realizar la venta, no hay stock suficiente");
            return;
        }
        this.#stock-=cantidad;
        console.log("Se realizo la venta correctamente");
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get nombre() {return this.#nombre;}
    set precio(precio) {
        if (precio<0) {
            console.log("No se coloco el precio, el argumento debe de ser positivo");
            return; 
        }
        this.#precio = precio;
    }
    get precio() {return "$"+parseFloat(this.#precio).toFixed(2);}
    set stock(cantidad) {
        if (cantidad<0) {
            console.log("No se coloco el stock, el argumento debe de ser positivo");
            return;
        }
        this.#stock = cantidad;
    }
    get stock() {return this.#stock;}
}

const arroz = new Producto("Arroz", 1.2, 100);
console.log(arroz.stock);
arroz.venta(101);
console.log(arroz.stock);
arroz.venta(90);
console.log(arroz.stock);
console.log(arroz.precio);
arroz.precio = -12; 
console.log(arroz.precio);
arroz.precio = 2;
console.log(arroz.precio);
console.log(arroz.stock);
arroz.stock = (-23);
console.log(arroz.stock);
arroz.stock = (1000);
console.log(arroz.stock);