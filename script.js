// Get modal elements
const modal = document.getElementById("pdfModal");
const btn = document.getElementById("viewBtn");
const closeSpan = document.querySelector(".close");

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scrolling
}

// Close modal on 'x' click
closeSpan.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Resume background scrolling
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
