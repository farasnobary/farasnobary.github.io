function promptName() {
    const userName = prompt("Please enter your name:");
    document.getElementById('nameDisplay').innerHTML = `Hello, ${userName}!`;
}

function enlargeImage() {
    const image = document.getElementById('myImage');
    if (image.style.width === '200px') {
        image.style.width = '400px';
    } else {
        image.style.width = '200px';
    }
}

function toggleMenu() {
    document.getElementById("dropdownContent").classList.toggle("show");
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
