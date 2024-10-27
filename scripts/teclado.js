const d = document;
let x = 0;
let y = 0;

export function moverPelota(e, pelota, cuadro) {
  const $pelota = d.querySelector(pelota);
  const $cuadro = d.querySelector(cuadro);
  let limitePelota = $pelota.getBoundingClientRect();
  let limiteCuadro = $cuadro.getBoundingClientRect();

  switch (e.keyCode) {
    case 37: //izquierda
      e.preventDefault();
      if (limitePelota.left >= limiteCuadro.left + 10) x--;
      break;
    case 38: //ariba
      e.preventDefault();
      if (limitePelota.top >= limiteCuadro.top + 10) y--;
      break;
    case 39: //derecha
      e.preventDefault();
      if (limitePelota.right <= limiteCuadro.right - 10) x++;
      break;
    case 40: //abajo
      e.preventDefault();
      if (limitePelota.bottom <= limiteCuadro.bottom - 10) y++;
      break;
  }
  $pelota.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
