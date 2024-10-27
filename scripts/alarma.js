const d = document;

export function alarma(botonIniciar, botonDetener, audioSrc) {
  let alarmaTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = audioSrc;
  d.addEventListener("click", (e) => {
    if (e.target.matches(botonIniciar)) {
      alarmaTempo = setTimeout(() => {
        $alarm.play();
      }, 0);
      e.target.disabled = true;
    }

    if (e.target.matches(botonDetener)) {
      clearTimeout(alarmaTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(botonIniciar).disabled = false;
    }
  });
}
