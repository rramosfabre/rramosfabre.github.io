function openTab(evt, tabName) {
  // Oculta todos los contenidos de las pestañas
  document.querySelectorAll(".tabcontent").forEach(tab => {
    tab.style.display = "none";
  });

  // Desactiva todas las pestañas
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // Muestra el contenido de la pestaña seleccionada
  document.getElementById(tabName).style.display = "block";

  // Activa la pestaña seleccionada
  if (!evt.currentTarget.classList.contains("active")) {
    evt.currentTarget.classList.add("active");
  }
}
