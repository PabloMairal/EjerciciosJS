const d = document;

export function countdown(relojCountdown) {
  const $relojCountdown = d.querySelector(relojCountdown);

  const countdownTempo = setInterval(() => {
    const ahora = new Date();
    const futuro = new Date("2025-10-27T20:00:00");
    const diferencia = futuro - ahora;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    $relojCountdown.innerHTML = `Faltan: ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    if (diferencia < 0) {
      clearInterval(countdownTempo);
      $relojCountdown.innerHTML = `Felicidades!`;
    }
  }, 1000);
}
