/* Fixed Header */
window.onscroll = function fixedHeader() {
	const header = document.querySelector('.header')
	if (window.pageYOffset > 50) {
		header.classList.add('fixed')
	} else if (window.pageYOffset < 100) {
		header.classList.remove('fixed')
	}
}
/* //////////////////////////////////////// */

/* Header Burger JS */
/* Menu Active Item */
const menuItem = document.querySelectorAll('.header__link')

menuItem.forEach(item => {
	item.addEventListener('click', () => {
		menuItem.forEach(item => item.classList.remove('active'))
		item.classList.add('active')
		if (burger.classList.contains('active')) {
			burgerActiveOff()
		}
	})
})
/* //////////////////////////////////////// */

const burger = document.querySelector('.header__burger')
const burger__logo = document.querySelector('.header__logo')

function burgerActive() {
	document.querySelector('.header__burger').classList.toggle('active')
	document.querySelector('.header').classList.toggle('active')
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('.header__logo').classList.toggle('active')
	document.getElementById('body').classList.toggle('lock')
}

function burgerActiveOff() {
	document.querySelector('.header__burger').classList.remove('active')
	document.querySelector('.header').classList.remove('active')
	document.querySelector('.header__menu').classList.remove('active')
	document.querySelector('.header__logo').classList.remove('active')
	document.getElementById('body').classList.remove('lock')
}

function menuItemActivOff() {
	menuItem.forEach(item => {
		item.classList.remove('active')
	})
}

burger.addEventListener('click', () => {
	burgerActive()
})

burger__logo.addEventListener('click', () => {
	burgerActiveOff()
	menuItemActivOff()
})
/* //////////////////////////////////////// */

/* Smooth scrolling */
const navbarToggler = document.querySelector('.header__burger')
const navbarMenu = document.querySelector('.header__list')
const navbarLinks = document.querySelectorAll('.header__link')

navbarToggler.addEventListener('click', navbarTogglerClick)

function navbarTogglerClick() {}

for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener('click', navbarLinkClick)
}

function navbarLinkClick(event) {
	smoothScroll(event) // Call the "smoothScroll" function
}

// window.requestAnimationFrame()
function smoothScroll(event) {
	event.preventDefault()
	const targetId =
		event.currentTarget.getAttribute('href') === '#'
			? 'header'
			: event.currentTarget.getAttribute('href')
	const targetPosition = document.querySelector(targetId).offsetTop
	const startPosition = window.pageYOffset
	const distance = targetPosition - startPosition
	const duration = 1000
	let start = null

	window.requestAnimationFrame(step)

	function step(timestamp) {
		if (!start) start = timestamp
		const progress = timestamp - start
		window.scrollTo(
			0,
			easeInOutCubic(progress, startPosition, distance, duration)
		)
		if (progress < duration) window.requestAnimationFrame(step)
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2
	if (t < 1) return (c / 2) * t * t * t + b
	t -= 2
	return (c / 2) * (t * t * t + 2) + b
}

/* Accordion */
const accordions = document.querySelectorAll('.accordion__item')

accordions.forEach(item => {
	item.addEventListener('click', () => {
		if (item.classList.contains('active')) {
			item.classList.remove('active')
		} else {
			accordions.forEach(item => item.classList.remove('active'))
			item.classList.add('active')
		}
	})
})

/* Slider */
const slider = Array.from(document.querySelectorAll('.reviews__item'))

const slideContainer = document.querySelector('.data-slider')

const leftButton = document.querySelector('.slider-prev')
const rightButton = document.querySelector('.slider-next')

let sliderWidth = document.querySelector('.reviews__item').offsetWidth

let step = -1

slider.forEach(slide => slideContainer.removeChild(slide))

function renderSlide(direction) {
	step += direction === 'left' ? -1 : 1

	if (step === slider.length) {
		step = 0
	} else if (step < 0) {
		step = slider.length - 1
	}

	const nextSlide = slider[step].cloneNode(true)
	slideContainer.appendChild(nextSlide)
}

function animateSlider(direction) {
	leftButton.disabled = true
	rightButton.disabled = true

	const currentSlides = document.querySelectorAll('.reviews__item')
	let offset = 0

	currentSlides.forEach(slide => {
		const distance =
			direction === 'left'
				? offset - (sliderWidth + 500)
				: offset + (sliderWidth + 500)
		slide.style.left = `${distance}px`
		offset++
	})

	currentSlides[0].addEventListener('transitionend', () => {
		currentSlides[0].remove()
		renderSlide(direction)
		leftButton.disabled = false
		rightButton.disabled = false
	})
}

function handleClickLeft() {
	animateSlider('left')
}

function handleClickRight() {
	animateSlider('right')
}

const setHeight = () => {
	let sliderHeight = document.querySelector('.reviews__item').offsetHeight
	sliderWidth = document.querySelector('.reviews__item').offsetWidth

	slideContainer.style.height = `${sliderHeight}px`
}

window.addEventListener('resize', setHeight)

renderSlide()
setHeight()

leftButton.addEventListener('click', handleClickLeft)
rightButton.addEventListener('click', handleClickRight)

///////////////////

/* Slider__two */
const slider__two = Array.from(document.querySelectorAll('.reviews__item__two'))

const slideContainer__two = document.querySelector('.data-slider__two')

const leftButton__two = document.querySelector('.slider-prev__two')
const rightButton__two = document.querySelector('.slider-next__two')

let sliderWidth__two = document.querySelector('.reviews__item__two').offsetWidth

let step__two = -1

slider__two.forEach(slide => slideContainer__two.removeChild(slide))

function renderSlide__two(direction__two) {
	step__two += direction__two === 'left' ? -1 : 1

	if (step__two === slider__two.length) {
		step__two = 0
	} else if (step__two < 0) {
		step__two = slider__two.length - 1
	}

	const nextSlide__two = slider__two[step__two].cloneNode(true)
	slideContainer__two.appendChild(nextSlide__two)
}

function animateSlider__two(direction__two) {
	leftButton__two.disabled = true
	rightButton__two.disabled = true

	const currentSlides__two = document.querySelectorAll('.reviews__item__two')
	let offset__two = 0

	currentSlides__two.forEach(slide => {
		const distance__two =
			direction__two === 'left'
				? offset__two - (sliderWidth__two + 500)
				: offset__two + (sliderWidth__two + 500)
		slide.style.left = `${distance__two}px`
		offset__two++
	})

	currentSlides__two[0].addEventListener('transitionend', () => {
		currentSlides__two[0].remove()
		renderSlide__two(direction__two)
		leftButton__two.disabled = false
		rightButton__two.disabled = false
	})
}

function handleClickLeft__two() {
	animateSlider__two('left')
}

function handleClickRight__two() {
	animateSlider__two('right')
}

const setHeight__two = () => {
	let sliderHeight__two = document.querySelector(
		'.reviews__item__two'
	).offsetHeight
	sliderWidth__two = document.querySelector('.reviews__item__two').offsetWidth

	slideContainer__two.style.height = `${sliderHeight__two}px`
}

window.addEventListener('resize', setHeight__two)

renderSlide__two()
setHeight__two()

leftButton__two.addEventListener('click', handleClickLeft__two)
rightButton__two.addEventListener('click', handleClickRight__two)

///////////////////
