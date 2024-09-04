import SimpleParallax from 'simple-parallax-js/vanilla';

// Select the image element(s) you want to apply the parallax effect to
var image = document.getElementsByClassName('Who_we_are_BG');

// Initialize SimpleParallax
new SimpleParallax(image, {
    orientation: 'down',  // You can also use 'left', 'up', 'down'
    scale: 1.5              // Adjust scale as needed
});
