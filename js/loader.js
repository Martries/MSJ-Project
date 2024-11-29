// Loader

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 50);
    }, 200);
});

document.querySelector('.page-loader').addEventListener('click', function(e) {
    e.preventDefault();
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    setTimeout(function() {
        window.location.href = e.target.href;
    }, 200);
});