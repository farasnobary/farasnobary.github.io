function promptName() {
    const userName = prompt("Please enter your name:");
    document.getElementById('nameDisplay').innerHTML = `Hello, ${userName}!`;
}
