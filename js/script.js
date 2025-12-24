document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    // Using a closed eye icon by default as placeholder.
    // In a real scenario, we'd swap the SVG path to open/closed.

    toggleButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Optional: Toggle icon styling here if we had two SVGs or paths
        // For this demo, just the functionality is sufficient or I can toggle opacity
        toggleButton.classList.toggle('visible');
    });
});
