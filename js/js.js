let scroll = new SmoothScroll('a[href*="#"]', {
    offset: 100
});
let videoFrame = document.querySelector('iframe#video-iframe');

window.addEventListener('resize', function () {
    videoFrame.style.height = document.querySelector("iframe").contentDocument.querySelector("body > video").clientHeight + "px";
});
window.addEventListener('load', function () {
    videoFrame.style.height = document.querySelector("iframe").contentDocument.querySelector("body > video").clientHeight + "px";
});

const menuToggler = document.querySelector('.openMenu'),
	  menu = document.querySelector('.navigation-menu'),
	  menuCloser = document.querySelector('.close'),
      navigationMenuLink = document.querySelectorAll('.navigation-menu__link'),
      catalogModal = document.querySelector('.submenu-catalog'),
      catalogButton = document.getElementById('catalog-button');

menuToggler.addEventListener('click', () => {
	menu.classList.add('opened');
	menu.classList.remove('closed');
});

menuCloser.addEventListener('click', () => {
	menu.classList.add('closed');
	setTimeout(() => {menu.classList.remove('opened');},500);
	console.log(menuCloser);
});

navigationMenuLink.forEach(link => {
    if (link.childNodes[0].tagName == 'BUTTON') {
        catalogButton.addEventListener('click', () => {
            catalogModal.classList.toggle('opened');
        });
    } else {
        link.addEventListener('click', () => {
            menu.classList.add('closed');
            setTimeout(() => {menu.classList.remove('opened');},500);
        });
    }
    
});

