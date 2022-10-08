const clock = document.querySelector("h2#clock");

function padding(time) {
  return String(time).padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const hours = padding(date.getHours());
  const minutes = padding(date.getMinutes());
  // const seconds = padding(date.getSeconds());

  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
