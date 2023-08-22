const timeDisplay = document.getElementById("time");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  timeDisplay.textContent = currentTime;
}

updateClock(); // Actualizar la hora al cargar la página
setInterval(updateClock, 1000); // Actualizar cada segundo
