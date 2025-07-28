document.addEventListener('mousemove', function(e) {
    const spotlight = document.querySelector('.spotlight');
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});