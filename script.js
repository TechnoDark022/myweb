// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 15 + 'px';
    cursor.style.top = e.clientY - 15 + 'px';
    cursorDot.style.left = e.clientX - 3 + 'px';
    cursorDot.style.top = e.clientY - 3 + 'px';
});

// Music
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

musicBtn.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Play Music';
    } else {
        bgMusic.play();
        musicBtn.textContent = '🔊 Music On';
    }
    musicPlaying = !musicPlaying;
});

// Touch ripple effect for mobile
function createRipple(e) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255,255,255,0.6';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    const rect = e.target.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    e.target.style.position = 'relative';
    e.target.style.overflow = 'hidden';
    e.target.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add touch feedback on mobile
const clickables = document.querySelectorAll('button, a, .skills span');
clickables.forEach(el => {
    el.addEventListener('touchstart', createRipple);
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
