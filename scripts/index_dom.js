import { relojDigital } from "./reloj.js";
import hamburgerMenu from "./hamburgerMenu.js";
import { alarma } from "./alarma.js";
import { moverPelota } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("#activar-alarma", "#desactivar-alarma", "assets/alarma.mp3");
});

d.addEventListener("keydown", (e) => {
  moverPelota(e, ".pelota", ".cuadro");
});
