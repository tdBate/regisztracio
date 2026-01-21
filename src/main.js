import 'bootstrap/dist/css/bootstrap.min.css';

function regisztracio() {
  document.getElementById("alert").innerHTML = "";

  document.getElementById("nevInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("jelszoInput").value = "";

  const alert = document.createElement("div");
  alert.className = "alert alert-success";
  alert.textContent = "Sikeres regisztráció";
  document.getElementById("alert").appendChild(alert);
}

document.getElementById("elkuldBtn").addEventListener("click",regisztracio)