'use strict';

const bar = document.getElementById('progress-bar');
const semiBar = new ProgressBar.SemiCircle(bar, {
    color: 'violet',
    strokeWidth: 2,
    trailWidth: 0.5,
    easing: 'bounce',
});

semiBar.animate(1, {
    duration: 3000,
});
