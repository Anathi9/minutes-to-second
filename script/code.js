function MinutesToSeconds() {
    let minutes = documents.getElementsById(input).value;


    let seconds = minutes * 60;
    document.getElementById('outcomes').innerText = `${minutes}minutes is equal to ${seconds} seconds.`;
}
