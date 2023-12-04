// script.js

function updateClock() {
  let d = new Date();

  // Get the current day, date, hour, minute, and second
  let day = d.toLocaleDateString('en-US', { weekday: 'long' });
  let date = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  let hours = d.getHours().toString().padStart(2, '0');
  let minutes = d.getMinutes().toString().padStart(2, '0');
  let seconds = d.getSeconds().toString().padStart(2, '0');

  // Update the time and date elements
  document.getElementById('day').textContent = day;
  document.getElementById('date').textContent = date;
  document.getElementById('hour').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;
}

// Initial call to set the initial time and date
updateClock();

// Set up an interval to update the time and date every second
setInterval(updateClock, 1000);