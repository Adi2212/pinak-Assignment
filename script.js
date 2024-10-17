document.querySelectorAll('.service-box').forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        anime({
            targets: box,
            rotateY: '360deg',
            easing: 'easeInOutQuad',
            duration: 1000,
            complete: function (anim) {
                
                box.style.transform = 'rotateY(0deg)';
            }
        });
    });
});
