
function Time() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

    const overlayText = document.createElement('div');
    overlayText.id = 'overlay-text';
    overlayText.innerHTML = `The time is: ${timeString}`;

    // Add the overlay text element to the overlay div
    const overlay = document.getElementById('overlay');
    overlay.appendChild(overlayText);
  }

  document.getElementById('submit').addEventListener('click', Time);
