document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('gift-modal');
    const giftBtn = document.getElementById('gift-btn');
    const closeBtn = document.getElementById('close-modal');
    const revealBtn = document.getElementById('reveal-btn');
    const giftCode = document.querySelector('.gift-code');
    const audio = document.getElementById('background-music');

    // Set volume immediately when page loads
    audio.volume = 0.3;

    // Play audio on first click anywhere on the page
    document.addEventListener('click', function() {
        audio.volume = 0.3; // Set volume to 30%
        audio.play().catch(function(error) {
            console.log("Audio play failed:", error);
        });
    }, { once: true });

    // Show modal when gift button is clicked
    giftBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        giftCode.classList.add('hidden');
        revealBtn.style.display = 'inline-block';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            giftCode.classList.add('hidden');
            revealBtn.style.display = 'inline-block';
        }
    });

    // Reveal the gift code when reveal button is clicked
    revealBtn.addEventListener('click', function() {
        giftCode.classList.remove('hidden');
        revealBtn.style.display = 'none';
    });
});
