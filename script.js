// Side navbar
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-side')
let close = document.querySelector('.close')


menu.addEventListener('click', function (e) {
    menu.style.display = 'none'
    navbar.style.right = "0px"
    e.preventDefault()
})

close.addEventListener('click', function (e) {
    navbar.style.right = '-1000px';
    menu.style.display = 'block'
    e.preventDefault();
})

//Slider

let indicators = document.querySelectorAll('.indicators-btn');
let indicatorsContent = document.querySelector('.indicators')
let bannerImg = document.querySelector('header');
let bannerText = document.querySelector('.banner-text')
let items = [{
        title: 'Hielo',
        Url: 'url(images/slide01.jpg)',
        Id: '1'
    },

    {
        title: 'Magna etiam',
        Url: 'url(images/slide02.jpg)',
        Id: '2'
    },
    {
        title: 'Tempus dolor',
        Url: 'url(images/slide03.jpg)',
        Id: '3'
    },
    {
        title: 'Etiam feugiat',
        Url: 'url(images/slide04.jpg)',
        Id: '4'
    },
    {
        title: 'Lorem adipiscing',
        Url: 'url(images/slide05.jpg)',
        Id: '5'
    },

]


var index = 0;

slide()

indicators[0].style.opacity = '1'

function slide() {
    interval = setInterval(function () {

        if (index < 4) {
            index++;
        } else {
            index = 0
        }
        showSlide(index)
    }, 2500)
}



indicators.forEach(item => {
    item.addEventListener('click', function (e) {
        index = e.target.id - 1
        showSlide(index)
    })
})

indicatorsContent.addEventListener('mouseenter', function (e) {
    clearInterval(interval);
});
indicatorsContent.addEventListener('mouseleave', function (e) {
    slide();
})

function showSlide(index) {

    indicators.forEach(item => {
        item.style.opacity = '0.5'
    })
    indicators[index].style.opacity = '1'
    bannerImg.style.backgroundImage = items[index].Url;
    bannerText.innerHTML = items[index].title;
}

//Navbar

let nav = document.querySelector('header nav')
window.onscroll = function () {
    navScroll();
    backToTop()
}

function navScroll() {
    if (window.scrollY > 100) {
        nav.className = 'scroll'
    } else {
        nav.className = 'normal'
    }
}


var btn = document.getElementById('back');


function backToTop() {
    if (window.scrollY > 200) {
        btn.style.opacity = '1'
        btn.style.visibility = 'visible'
    } else {
        btn.style.opacity = '0'
        btn.style.visibility = 'hidden'
    }
}

btn.addEventListener('click', function (e) {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    e.preventDefault()

})