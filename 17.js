class Notificacion {
    constructor(mensaje = '') {
        if (typeof mensaje !== 'string') throw new TypeError('mensaje debe ser una cadena');
        this.mensaje = mensaje;
    }

    enviar() {
        throw new Error('Método enviar() debe ser implementado por la subclase');
    }
}

class Email extends Notificacion {
    constructor(destinatario, asunto, mensaje) {
        super(mensaje);
        if (typeof destinatario !== 'string' || typeof asunto !== 'string') {
            throw new TypeError('destinatario y asunto deben ser cadenas');
        }
        this.destinatario = destinatario;
        this.asunto = asunto;
    }

    enviar() {
        console.log(`Email -> Para: ${this.destinatario} | Asunto: ${this.asunto} | Mensaje: ${this.mensaje}`);
        return true;
    }
}

class SMS extends Notificacion {
    constructor(telefono, mensaje) {
        super(mensaje);
        if (typeof telefono !== 'string') throw new TypeError('telefono debe ser una cadena');
        this.telefono = telefono;
    }

    enviar() {
        console.log(`SMS -> Para: ${this.telefono} | Mensaje: ${this.mensaje}`);
        return true;
    }
}

class Push extends Notificacion {
    constructor(deviceId, mensaje) {
        super(mensaje);
        if (typeof deviceId !== 'string') throw new TypeError('deviceId debe ser una cadena');
        this.deviceId = deviceId;
    }

    enviar() {
        console.log(`Push -> Dispositivo: ${this.deviceId} | Mensaje: ${this.mensaje}`);
        return true;
    }
}

function procesarNotificaciones(lista) {
    if (!Array.isArray(lista)) throw new TypeError('Se esperaba un array de notificaciones');
    for (const n of lista) {
        if (!(n instanceof Notificacion)) {
            console.log('Elemento ignorado: no es una Notificacion', n);
            continue;
        }
        try {
            n.enviar();
        } catch (err) {
            console.log('Error al enviar notificación:', err.message);
        }
    }
}
