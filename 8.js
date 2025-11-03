const notas = [12, 20, 18, 13, 12, 9, 10, 20, 2, 4, 7, 9];

const ejercicio8 = (notasArray) => {
    let notaMayor = Math.max(...notasArray);
    let notasNormalizadas = [];

    for (const nota of notasArray) {
        notasNormalizadas.push(Math.round(nota/notaMayor));
    }

    return notasNormalizadas;
};

let notasNormalizadas = ejercicio8(notas);
console.log(notasNormalizadas.join(", "));

