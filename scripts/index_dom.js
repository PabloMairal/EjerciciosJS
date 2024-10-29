import { relojDigital } from "./reloj.js";
import hamburgerMenu from "./hamburgerMenu.js";
import { alarma } from "./alarma.js";
import { moverPelota } from "./teclado.js";
import { countdown } from "./countdown.js";
import { botonTop } from "./botonTop.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("#activar-alarma", "#desactivar-alarma", "assets/alarma.mp3");
  countdown("#relojCountdown");
  botonTop(".botonTop");
});

d.addEventListener("keydown", (e) => {
  moverPelota(e, ".pelota", ".cuadro");
});
