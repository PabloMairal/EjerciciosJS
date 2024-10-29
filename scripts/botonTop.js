const d = document;

export function botonTop(boton) {
  const $boton = d.querySelector(boton);
  console.log(boton);

  d.addEventListener("scroll", (e) => {
    if (window.scrollY > 400 && $boton.classList.contains("hidden")) {
      $boton.classList.remove("hidden");
    } else if (window.scrollY <= 400) {
      $boton.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      window.scrollTo(0, 0);
    }
  });
}
