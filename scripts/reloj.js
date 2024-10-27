const d = document;

export function relojDigital(reloj, botonIniciar, botonDetener) {
  let relojTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(botonIniciar)) {
      relojTempo = setInterval(() => {
        let horaReloj = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3> ${horaReloj} </h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(botonDetener)) {
      clearInterval(relojTempo);
      d.querySelector(reloj).innerHTML = null;
      d.querySelector(botonIniciar).disabled = false;
    }
  });
}
