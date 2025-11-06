class Cuenta {
    #saldo;
    constructor(saldo = 0) {
        this.#saldo = saldo;
    }

    depositar(monto) {
        if (typeof monto !== 'number' || monto <= 0) {
            console.log('Deposito rechazado: monto inválido');
            return false;
        }
        this.#saldo += monto;
        return true;
    }

    retirar(monto) {
        if (typeof monto !== 'number' || monto <= 0) {
            console.log('Retiro rechazado: monto inválido');
            return false;
        }
        if (monto > this.#saldo) {
            console.log('Retiro rechazado: saldo insuficiente');
            return false;
        }
        this.#saldo -= monto;
        return true;
    }

    retirarSinValidar(monto) {
        this.#saldo -= monto;
        return true;
    }

    transferir(destCuenta, monto) {
        if (!(destCuenta instanceof Cuenta)) {
            console.log('Transferencia rechazada: destinatario inválido');
            return false;
        }
        if (!this.retirar(monto)) return false;
        destCuenta.depositar(monto);
        return true;
    }

    get saldo() {
        return Number(this.#saldo.toFixed(2));
    }
}

class CuentaAhorro extends Cuenta {
    constructor(saldo = 0) {
        super(saldo);
    }

 
    retirar(monto) {
        if (typeof monto !== 'number' || monto <= 0) {
            console.log('Retiro rechazado: monto inválido');
            return false;
        }
        if (monto > this.saldo) {
            console.log('Retiro rechazado: no se permite sobregiro en CuentaAhorro');
            return false;
        }
        return super.retirar(monto);
    }
}

class CuentaCorriente extends Cuenta {
    #limiteDescubierto;
    constructor(saldo = 0, limiteDescubierto = 500) {
        super(saldo);
        if (typeof limiteDescubierto !== 'number' || Number.isNaN(limiteDescubierto) || limiteDescubierto < 0) {
            throw new TypeError('limiteDescubierto debe ser un número >= 0');
        }
        this.#limiteDescubierto = limiteDescubierto;
    }

     retirar(monto) {
        if (typeof monto !== 'number' || monto <= 0) {
            console.log('Retiro rechazado: monto inválido');
            return false;
        }
        const disponible = this.saldo + this.#limiteDescubierto;
        if (monto > disponible) {
            console.log('Retiro rechazado: excede límite de sobregiro');
            return false;
        }
 
        return super.retirarSinValidar(monto);
    }

    get limiteDescubierto() {
        return this.#limiteDescubierto;
    }
}