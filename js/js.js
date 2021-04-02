let videoFrame = document.querySelector('iframe#video-iframe');

window.addEventListener('resize', function () {
    videoFrame.style.height = document.querySelector("iframe").contentDocument.querySelector("body > video").clientHeight + "px";
});
window.addEventListener('load', function () {
    videoFrame.style.height = document.querySelector("iframe").contentDocument.querySelector("body > video").clientHeight + "px";
});