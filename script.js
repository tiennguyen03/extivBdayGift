document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('gift-modal');
    const giftBtn = document.getElementById('gift-btn');
    const closeBtn = document.getElementById('close-modal');
    const revealBtn = document.getElementById('reveal-btn');
    const giftCode = document.querySelector('.gift-code');

    // Show modal when gift button is clicked
    giftBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Reveal the gift code when reveal button is clicked
    revealBtn.addEventListener('click', function() {
        giftCode.classList.remove('hidden');
        revealBtn.style.display = 'none';  // Hide the reveal button after clicking
    });

    // Reset the hidden state when modal is closed
    closeBtn.addEventListener('click', function() {
        giftCode.classList.add('hidden');
        revealBtn.style.display = 'inline-block';
    });
});