const apiURLStart = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
const apiURLEnd = '_0.jpg'
const supportList = ['Thresh', 'Blitzcrank', 'Rakan', 'Nami', 'Nautilus']
const bottomList = ['Jhin', 'Lucian']
const topList = ['Chogath', 'Nasus']
const supportChamps = document.querySelector('.supportChamps')
const bottomChamps = document.querySelector('.bottomChamps')
const topChamps = document.querySelector('.topChamps')

supportList.forEach(c => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h6')
    const nameWrapper = document.createElement('div')
    img.src = apiURLStart + c + apiURLEnd
    div.appendChild(img)
    div.appendChild(document.createElement('br'))
    name.appendChild(document.createTextNode(c))
    nameWrapper.appendChild(name)
    nameWrapper.className = 'nameWrapper'
    div.appendChild(nameWrapper)
    div.className = 'champ'
    supportChamps.appendChild(div)
})

bottomList.forEach(c => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h6')
    const nameWrapper = document.createElement('div')
    img.src = apiURLStart + c + apiURLEnd
    div.appendChild(img)
    div.appendChild(document.createElement('br'))
    name.appendChild(document.createTextNode(c))
    nameWrapper.appendChild(name)
    nameWrapper.className = 'nameWrapper'
    div.appendChild(nameWrapper)
    div.className = 'champ'
    bottomChamps.appendChild(div)
})

topList.forEach(c => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h6')
    const nameWrapper = document.createElement('div')
    img.src = apiURLStart + c + apiURLEnd
    div.appendChild(img)
    div.appendChild(document.createElement('br'))
    if (c == 'Chogath') name.appendChild(document.createTextNode('Cho\'Gath'))
    else name.appendChild(document.createTextNode(c))
    nameWrapper.appendChild(name)
    nameWrapper.className = 'nameWrapper'
    div.appendChild(nameWrapper)
    div.className = 'champ'
    topChamps.appendChild(div)
})

const champs = document.querySelectorAll('.champ')
const onLoadTl = new TimelineMax()

onLoadTl.staggerFromTo(champs, 1, {
    opacity: 0,
    y: '5%'
}, {
    opacity: 100,
    y: '0%',
    ease: Power2.easeInOut
}, 0.15)


champs.forEach(c => {
    const nameWrapper = c.querySelector('.nameWrapper')
    const champHoverTl = new TimelineMax({
        paused: true
    })

    champHoverTl.to(c, 0.1, {
            transform: 'scale(0.8)',
            ease: Power2.ease
        }, '#start')
        .to(nameWrapper, 0.3, {
            height: '25%',
            ease: Power2.ease
        }, '#start')

    c.addEventListener('mouseenter', event => {
        champHoverTl.play()
    })
    c.addEventListener('mouseleave', event => {
        champHoverTl.reverse()
    })
})