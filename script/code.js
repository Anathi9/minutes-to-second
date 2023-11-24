function MinutesToSeconds() {
    let minutes = document.getElementById('minutes').value;

    let seconds = minutes * 60;
    document.getElementById('outcomes').textContent = `${minutes} ${seconds} `;
}
MinutesToSeconds()