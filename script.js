// const cursor1 = new MouseFollower({
//     container: '.mf-container',
//     speed: 0.3
// });
const cursor = new MouseFollower();
const el = document.querySelector('.headings');

el.addEventListener('mouseenter', () => {
});

el.addEventListener('mouseleave', () => {
    cursor.removeImg()
});
document.addEventListener('mousemove', function(event) {
    // Get the mouse position relative to the document
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Get the dimensions of the document
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;

    // Calculate the new cursor position based on the magnet effect
    var newX = mouseX + (docWidth / 2 - mouseX) / 10; // Adjust the divisor for magnet strength
    var newY = mouseY + (docHeight / 2 - mouseY) / 10;

    // Set the cursor position
    document.documentElement.style.cursor = `url('    cursor.setImg('https://imgs.search.brave.com/BoOVdJ7Y3US4k6yvKhIn39Lw3MpIIXXWaqKjL8DOkEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/NDc0NDc4My9waG90/by9hYnN0cmFjdC1y/ZWQtYmx1ZS1iYWNr/Z3JvdW5kLXZvcnRl/eC10ZWNobm9sb2dp/Y2FsLWNvbmNlcHQu/d2VicD9hPTEmYj0x/JnM9NjEyeDYxMiZ3/PTAmaz0yMCZjPS1x/MXFscHltR0xlQmZy/ZjhWc25ldHp2aHdf/MXJzRnVHS1M4ay1q/QUpsdHc9')
'), auto`; // Replace 'cursor.png' with your desired cursor image
    document.documentElement.style.cursorPosition = `${newX}px ${newY}px`;
});
const video = document.getElementById('shaort.mp4');

window.addEventListener('scroll', () => {
    const videoRect = video.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (videoRect.top < windowHeight && videoRect.bottom > 0) {
        video.play();
    } else {
        video.pause();
    }
});
const parallaxImage = document.querySelector('.parallax-image');
const container = document.querySelector('.parallax-container');

container.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const containerRect = container.getBoundingClientRect();   

    const imageWidth = parallaxImage.width;
    const imageHeight = parallaxImage.height;

    const xOffset = (mouseX - containerRect.left) / containerRect.width * imageWidth;
    const yOffset = (mouseY - containerRect.top) / containerRect.height * imageHeight;

    parallaxImage.style.transform = `translate(-${xOffset}px, -${yOffset}px)`;

    // Reveal the image when the mouse is within a certain radius
    const radius = 100; // Adjust the radius as needed
    const distance = Math.sqrt(Math.pow(mouseX - containerRect.left - imageWidth / 2, 2) + Math.pow(mouseY - containerRect.top - imageHeight / 2, 2));

    if (distance <= radius) {
        parallaxImage.classList.add('visible');
    } else {
        parallaxImage.classList.remove('visible');
    }
});