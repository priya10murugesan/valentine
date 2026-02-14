const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
let timeoutId;

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500); 
});

heartSeal.style.transition = 'opacity 0.3s ease';

// $('#nextbtn').click(function () {
//     window.location.href = "";
// });

// Create floating butterflies
function createButterfly() {
    var butterfly = $('<div class="butterfly">💌</div>');
    var size = Math.random() * 15 + 20;
    var left = Math.random() * 100;
    var duration = Math.random() * 4 + 6;

    butterfly.css({
        left: left + 'vw',
        fontSize: size + 'px',
        animationDuration: duration + 's'
    });

    $('body').append(butterfly);

    setTimeout(function () {
        butterfly.remove();
    }, duration * 1000);
}

// butterflies appear slower than hearts
setInterval(createButterfly, 1500);
