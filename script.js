function openTab(evt, tabName) {
  // Oculta todos los contenidos de las pestañas
  var tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach(tab => {
    tab.style.display = "none";
  });

  // Desactiva todas las pestañas
  var tablinks = document.querySelectorAll(".tab");
  tablinks.forEach(tab => {
    tab.classList.remove("active");
  });

  // Muestra el contenido de la pestaña seleccionada
  document.getElementById(tabName).style.display = "block";

  // Activa la pestaña seleccionada
  evt.currentTarget.classList.add("active");
}
