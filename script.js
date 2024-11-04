const noButton = document.getElementById('no');

noButton.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 75;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});