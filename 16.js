
class Carrito {
    items = [];

    static _precioNumero(producto) {
        let p = producto?.precio;
        if (typeof p === 'string') {
            p = p.replace(/[^\d.-]/g, '');
        }
        const n = parseFloat(p);
        return Number.isFinite(n) ? n : NaN;
    }

    agregarProducto(producto, cantidad = 1) {
        if (!producto || (typeof producto.nombre !== 'string' && typeof producto.nombre !== 'function')) {
            console.log('Producto inválido');
            return false;
        }
        const nombre = typeof producto.nombre === 'function' ? producto.nombre() : producto.nombre;
        const precioNum = Carrito._precioNumero(producto);
        if (Number.isNaN(precioNum) || precioNum < 0) {
            console.log('Precio inválido en el producto:', nombre);
            return false;
        }
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            console.log('Cantidad inválida');
            return false;
        }

        const existente = this.items.find(it => it.producto === producto || (it.producto.nombre === nombre));
        if (existente) {
            existente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
        return true;
    }

    calcularTotal() {
        const total = this.items.reduce((acc, it) => {
            const precio = Carrito._precioNumero(it.producto);
            return acc + (precio * it.cantidad);
        }, 0);
        return Number(total.toFixed(2));
    }

    mostrarResumen() {
        if (this.items.length === 0) {
            console.log('Carrito vacío');
            return;
        }
        console.log('Resumen del carrito:');
        this.items.forEach(it => {
            const nombre = it.producto.nombre;
            const precio = Carrito._precioNumero(it.producto);
            const subtotal = (precio * it.cantidad).toFixed(2);
            console.log(`${nombre} x ${it.cantidad} — $${precio.toFixed(2)} c/u — Subtotal: $${subtotal}`);
        });
        console.log('Total: $' + this.calcularTotal().toFixed(2));
    }

    vaciar() {
        this.items = [];
    }
}