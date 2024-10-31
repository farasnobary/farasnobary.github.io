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

function toggleContactMenu() {
    document.getElementById("dropdownContact").classList.toggle("show");
}

// Close dropdown menu when clicking outside of it
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
};

function navHover(element) {
    element.style.color = "blue";
}

function navOut(element) {
    element.style.color = "";
}

// Function to handle form submission
document.getElementById("submitButton").onclick = function(e) {
    e.preventDefault(); // Prevent form from submitting to server
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("useremail", document.getElementById("useremail").value);
    localStorage.setItem("message", document.getElementById("message").value);
    localStorage.setItem("gender", document.querySelector('input[name="gender"]:checked').value);
    localStorage.setItem("interest", Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value).join(", "));
    alert("Your information has been saved!");
};

// Function to handle clearing form inputs
document.getElementById("clearButton").onclick = function() {
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("message").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="interest"]').forEach(input => input.checked = false);
    alert("Form has been cleared!");
};

// Submit button functionality: stores form data in local storage
document.getElementById("submitButton").onclick = function (e) {
    e.preventDefault(); // Prevent form from submitting to server
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("useremail", document.getElementById("useremail").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("gender", document.querySelector('input[name="gender"]:checked').value);
    localStorage.setItem("interest", Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(cb => cb.value).join(", "));
    localStorage.setItem("message", document.getElementById("message").value);
    alert("Your information has been saved!");
};

// Clear button functionality: resets form fields
document.getElementById("clearButton").onclick = function () {
    document.getElementById("contactForm").reset();
    alert("Form has been cleared!");
};