function openTab(evt, tabName) {
  document.querySelectorAll(".tabcontent").forEach(tab => {
    tab.style.display = "none";
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
