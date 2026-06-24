function openScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function login() {
  openScreen("homeScreen");
}

function logout() {
  openScreen("loginScreen");
}
