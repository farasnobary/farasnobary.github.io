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

// Function form submission
document.getElementById("submitButton").onclick = function(e) {
    e.preventDefault(); 
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("useremail", document.getElementById("useremail").value);
    localStorage.setItem("message", document.getElementById("message").value);
    localStorage.setItem("gender", document.querySelector('input[name="gender"]:checked').value);
    localStorage.setItem("interest", Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value).join(", "));
    alert("Your information has been saved!");
};

// Function for clearing form data
document.getElementById("clearButton").onclick = function() {
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("message").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="interest"]').forEach(input => input.checked = false);
    alert("Form has been cleared!");
};

// Submit functionality stores in local storage
document.getElementById("submitButton").onclick = function (e) {
    e.preventDefault(); 
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("useremail", document.getElementById("useremail").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("gender", document.querySelector('input[name="gender"]:checked').value);
    localStorage.setItem("interest", Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(cb => cb.value).join(", "));
    localStorage.setItem("message", document.getElementById("message").value);
    alert("Your information has been saved!");
};

// Clear button functionality clears everything
document.getElementById("clearButton").onclick = function () {
    document.getElementById("contactForm").reset();
    alert("Form has been cleared!");
};

// Function for enlarging text
function increaseTextSize() {
    document.body.style.fontSize = "1.9em";
}

let textIsEnlarged = false; // Track if text is currently enlarged

function increaseTextSize() {
    const elements = document.querySelectorAll("p, h1, h2, h3, li, td"); // Include any other tags as needed

    elements.forEach(element => {
        if (textIsEnlarged) {
            // Reset to original size
            element.style.fontSize = ""; // Removes the inline style, returning to CSS default
        } else {
            // Increase size by 20%
            const currentSize = window.getComputedStyle(element).fontSize;
            const newSize = parseFloat(currentSize) * 1.2;
            element.style.fontSize = `${newSize}px`;
        }
    });

    // Toggle the flag
    textIsEnlarged = !textIsEnlarged;
}


// Function for colorblind-friendly mode
function toggleColorBlindMode() {
    const body = document.body;
    if (body.classList.contains("colorblind")) {
        body.classList.remove("colorblind");
    } else {
        body.classList.add("colorblind");
    }
}

// 3 images
function showAltText(imageId) {
    const image = document.getElementById(imageId);
    const altText = image.alt;
    const altTextParagraph = document.getElementById(`altText${imageId.slice(-1)}`); // Selects the <p> tag for each image
    altTextParagraph.innerText = altText;
}
