function openTab(evt, tabName) {
  var i;
  var tabcontent = document.querySelectorAll(".tabcontent");
  var tablinks = document.querySelectorAll(".tab");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";

  if (!evt.currentTarget.classList.contains("active")) {
    evt.currentTarget.classList.add("active");
  }
}
