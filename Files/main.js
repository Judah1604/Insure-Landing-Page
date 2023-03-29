let nav = document.querySelector('.nav'),
	toggle = document.querySelector('.toggle'),
	toggleImg = document.querySelector('.toggle img'),
	navMenu = document.querySelector('.nav-menu'),
	menuMode = 'invisible'


window.addEventListener('resize', makeSiteResponsive)
document.addEventListener('DOMContentLoaded', makeSiteResponsive)

function makeSiteResponsive() {
	if (window.innerWidth <= 425) {
		nav.style.display = 'none'
		toggle.style.display = 'block'
	}
	if (window.innerWidth > 425) {
		nav.style.display = 'flex'
		toggle.style.display = 'none'
	}
}

toggle.addEventListener('click', function () {
	if (menuMode == 'invisible') {
		menuMode = 'visible'
	} else if (menuMode == 'visible') {
		menuMode = 'invisible'
	}
	if (menuMode == 'visible') {
		toggleImg.setAttribute('src', 'images/icon-close.svg')
	}
	if (menuMode == 'invisible') {
		toggleImg.setAttribute('src', 'images/icon-hamburger.svg')
	}
	navMenu.classList.toggle('visible')
})
