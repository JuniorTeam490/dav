
function toggleDescription(element) {
    const desc = element.querySelector('.description');
    if (desc.style.display === "block") {
        desc.style.display = "none";
    } else {
        desc.style.display = "block";
    }
}

document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
