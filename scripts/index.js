const topCon = document.querySelector('.topContainer')
const headerCon = document.querySelector('.headerContainer')
const headerDiv = document.querySelector('.headerDiv')
const headerName = document.querySelector('.headerName')
const headerDesc = document.querySelector('.headerDesc')
const headerBg = document.querySelector('.headerBg')

const onLoadTl = new TimelineMax()

onLoadTl.fromTo(headerCon, 1, {
        height: '0%'
    }, {
        height: '100%',
        ease: Power2.easeInOut
    })
    .fromTo(headerName, 1, {
        x: '-30%',
        opacity: 0
    }, {
        x: '0%',
        opacity: 100,
        ease: Power2.easeInOut
    }, '-=0.3')
    .fromTo(headerDesc, 1, {
        y: '70%',
        opacity: 0
    }, {
        y: '0%',
        opacity: 100,
        ease: Power2.easeInOut
    }, '-=0.5')
    .fromTo(headerBg, 3, {
        filter: 'blur(5px)'
    }, {
        filter: 'blur(0px)',
        ease: Power2.easeInOut
    }, '-=3')


const button = document.querySelector('.poolButton')
const buttonText = document.querySelector('.poolButtonText')
const buttonBg = document.querySelector('.poolButtonBg')
const buttonHoverTl = new TimelineMax({
    paused: true
})

buttonHoverTl.to(buttonText, 1, {
        color: 'white',
        ease: Expo.easeOut
    }, '#start')
    .to(button, 0.1, {
        'border-color': 'rgb(255, 255, 255, 0)',
        'border-radius': '30px',
        ease: Quad.easeOut
    }, '#start')
    .from(buttonBg, 0.25, {
        scaleX: '0%',
        transformOrigin: 'left center',
        ease: Quad.easeOut
    }, '#start')

button.addEventListener('mouseenter', event => {
    buttonHoverTl.play()
})
button.addEventListener('mouseleave', event => {
    buttonHoverTl.reverse()
})