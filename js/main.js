const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');




for (let btn of infoBtns) {

    btn.addEventListener('click', showHint)

}

function showHint(e) {
    e.stopPropagation();

    for (let hint of infoHints) {
        hint.classList.add('none');
    }


    this.parentNode.querySelector('.info-hint').classList.toggle('none')

}


document.addEventListener('click', closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}



for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}



// slider


const swiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 42,
    freeMode: true,


    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 5,
            spaceBetween: 42,
        },
    },


    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },


});


const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {


    btn.addEventListener('click', function () {

        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }


        this.classList.add('tab-controls__btn--active');



        for (let product of tabsProducts) {


            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }


        }

        swiper.update();
    })
}



//mobile nav


const mobileNavOpenBtn = document.querySelector('#open-nav-mobile-btn');
const mobileNavCloseBtn = document.querySelector('#close-nav-mobile-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
}


mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}
