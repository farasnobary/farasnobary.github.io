function promptName() {
    const userName = prompt("Please enter your name:");
    document.getElementById('nameDisplay').innerHTML = `Hello, ${userName}!`;
}

function enlargeImage() {
    const image = document.getElementById('myImage');
    image.style.width = (image.style.width === '200px') ? '400px' : '200px';
}

function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function navHover(element) {
    element.style.color = "blue";
}

function navOut(element) {
    element.style.color = "";
}
