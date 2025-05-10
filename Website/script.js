// Defina a data de lançamento (ex: 31 de outubro de 2025 às 00:00)
const releaseDate = new Date("Oct 31, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "It's time.";
    clearInterval(countdown);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);
