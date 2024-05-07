function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tabcontent");
  const targetTab = document.getElementById(tabName);

  tabContents.forEach(tab => {
    tab.style.display = "none";
  });

  if (!targetTab) {
    console.error(`No existe un elemento con id ${tabName}`);
    return; // Salir de la función si el tab especificado no existe
  }

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  targetTab.style.display = "block";
  evt.currentTarget.classList.add("active");
}
