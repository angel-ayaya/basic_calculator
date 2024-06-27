document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los elementos de tipo botón
  const display = document.getElementById("display");
  const equal = document.getElementById("equal");
  const clear = document.getElementById("clear");
  const del = document.getElementById("del");

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("num")) {
        if (
          display.value === "0" ||
          display.value === "Error" ||
          display.value === "Infinity" ||
          display.value === "-Infinity" ||
          display.value === "NaN"
        ) {
          display.value = button.textContent;
        } else {
          display.value += button.textContent;
        }
      } else if (button.classList.contains("op")) {
        display.value += button.textContent;
      }
    });
  });

  // Limpiar el input
  clear.addEventListener("click", function () {
    display.value = "0";
  });
  // Borrar el último carácter del display
  del.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
      display.value = "0";
    }
  });

  // Calcular el resultado
  equal.addEventListener("click", function () {
    try {
      display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/"));
    } catch (error) {
      display.value = "Error";
    }
  });
});
