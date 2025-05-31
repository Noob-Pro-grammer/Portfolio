// Select all navigation links and content sections
const navLinks = document.querySelectorAll('.nav-list a');
const contentSections = document.querySelectorAll('.content-section');

// Function to show the selected section and hide others
function updateContent(contentKey, activeLink) {
    // Hide all sections
    contentSections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const targetSection = document.querySelector(`#${contentKey}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    activeLink.classList.add('active');
}

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Get the content key from the href attribute (e.g., #home -> home)
        const contentKey = link.getAttribute('href').substring(1);

        // Update the content and highlight the active link
        updateContent(contentKey, link);
    });
});
// Set "Home" as the default content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const defaultLink = document.querySelector('.nav-list a[href="#home"]');
    if (defaultLink) {
        updateContent('home', defaultLink);
    }
});