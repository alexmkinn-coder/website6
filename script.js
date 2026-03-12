// Get elements
const modal = document.getElementById("pdfModal");
const btn = document.getElementById("viewBtn");
const span = document.getElementsByClassName("close")[0];

// Open the modal when button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if user clicks outside of the window
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
