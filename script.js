
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

function toggleDetails(serviceDiv) {
    const details = serviceDiv.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
