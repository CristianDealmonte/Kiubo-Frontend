export function extraerHora( fecha ) {
    const date = new Date(fecha);
    const hora = padZero(date.getHours());
    const minutos = padZero(date.getMinutes());
    return `${hora}:${minutos}`;
}

function padZero(numero) {
    return numero.toString().padStart(2, '0');
}