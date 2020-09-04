///////// ON LOAD 

window.onload = () => {
    insertContentIntro();
    if (window.innerWidth >= 951) {
        slideshowImages[currentImageCounter].classList.add('slide_in_from_right');
        setInterval(nextImage, nextImageDelay);
    } else  {
        slideshowImages.forEach( e => e.style.opacity = 0)
        slideshowImages[currentImageCounter].style.display = 'block';
        setTimeout(() => {
            slideshowImages[currentImageCounter].style.opacity = 1
        }, 100);
        setInterval(mobileBannerHandler, 4000);
    }
    
};

/////////

///////// MOBILE NAVBAR

document.getElementById('nav_icon').addEventListener('click', () => {
    mobileNavbarHandler()
});


const overlay = document.getElementById('overlay');
overlay.addEventListener('click', () => {
    mobileNavbarHandler()
});

const mobileNavbarHandler = () => {
    document.getElementById('nav_icon').classList.toggle('open');
    document.getElementById('navigation_menu').classList.toggle('show_navbar');
    if (overlay.style.display === 'block') {
        overlay.classList.toggle('cover');
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 350);  
        document.body.style.overflow = 'visible';  
    } else {
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.classList.toggle('cover');
        }, 200);    
        document.body.style.overflow = 'hidden';
    };
}

/////////

///////// BANER SLIDESHOW 

const slideshowImages = document.querySelectorAll('.slideshow_img');

const nextImageDelay = 4000;
let currentImageCounter = 0;

const nextImage = () => {
    slideshowImages[currentImageCounter].classList.add('slide_out_to_left');
    const tempCounter = currentImageCounter;
    setTimeout(()=> {
        slideshowImages[tempCounter].classList.remove('slide_in_from_right')
    }, 1050);
    currentImageCounter++;
    if (currentImageCounter > slideshowImages.length -1) {
        currentImageCounter = 0
    };
    slideshowImages[currentImageCounter].classList.remove('slide_out_to_left')
    slideshowImages[currentImageCounter].classList.add('slide_in_from_right');
}

const mobileBannerHandler = () => {
    const tempCounter = currentImageCounter;

    slideshowImages[currentImageCounter].style.opacity = 0;
    setTimeout(() => {
        slideshowImages[tempCounter].style.display = 'none';
    }, 650);

    currentImageCounter++;
    if (currentImageCounter > slideshowImages.length -1) {
        currentImageCounter = 0
    };

    slideshowImages[currentImageCounter].style.display = 'block';
    setTimeout(() => {
        slideshowImages[currentImageCounter].style.opacity = 1
    }, 100);
}

//////////

////////// CONTENT APPEARANCE

const contentDivId = [
    '#content_intro',
    '#home', 
    '#reference', 
    '#fodder', 
    '#contact'
];

const menuOption = document.querySelectorAll('.nav_item');

let currentContentDivCounter = 0;

menuOption.forEach(el => {
        el.addEventListener('keydown', event => {

            if (event.keyCode === 13) {
                let currentDiv = currentContentDivCounter;
                let nextDiv = 0;
                for (let i = 0; i < menuOption.length; i++) {
                    if (event.target == menuOption[i]) {
                        nextDiv = i + 1;
                    }
                };
                if (currentDiv === nextDiv) {
                    return
                };
                contentHandler(currentDiv, nextDiv);
                currentContentDivCounter = nextDiv
            };
        });
        el.addEventListener('click', () => {

            if(window.innerWidth <= 950){
                mobileNavbarHandler()
            }

            let currentDiv = currentContentDivCounter;
            let nextDiv = 0;
            for (let i = 0; i < menuOption.length; i++) {
                if (event.target == menuOption[i]) {
                    nextDiv = i +1;
                }
            };
            if (currentDiv === nextDiv) {
                return
            };
            contentHandler(currentDiv, nextDiv);
            currentContentDivCounter = nextDiv
        });
    }
);

const insertContentIntro = () => {
    document.querySelector(contentDivId[0]).style.display = 'block';
    document.querySelector(contentDivId[0] + ' div').classList.add('slide_in_from_left_simple');
    document.querySelector(contentDivId[0] + ' div').classList.remove('hide');
    setTimeout(() => {
        document.querySelector(contentDivId[0] + ' h1').classList.add('slide_in_from_right_simple');
        document.querySelector(contentDivId[0] + ' h1').classList.remove('hide');
    }, 800);
}

const contentHandler = (current, next) => {
    if (current > 0) {
        menuOption[current -1].classList.remove('nav_item_current');
        
        document.querySelector(contentDivId[current] + ' div:nth-child(3)').classList.remove('show_section');
        document.querySelector(contentDivId[current] + ' div:nth-child(3)').classList.add('hide_section');
    };

    document.querySelector(contentDivId[current] + ' div:nth-child(1)').classList.add('slide_out_to_right_simple');
    document.querySelector(contentDivId[current] + ' h1').classList.add('slide_out_to_left_simple');
    setTimeout(() => {
        document.querySelector(contentDivId[current] + ' div:nth-child(1)').classList.add('hide');
        document.querySelector(contentDivId[current] + ' h1').classList.add('hide');

        document.querySelector(contentDivId[current] + ' div:nth-child(1)').classList.remove('slide_in_from_right_simple');
        document.querySelector(contentDivId[current] + ' div:nth-child(1)').classList.remove('slide_out_to_right_simple');
        
        document.querySelector(contentDivId[current] + ' h1').classList.remove('slide_in_from_left_simple');
        document.querySelector(contentDivId[current] + ' h1').classList.remove('slide_out_to_left_simple');

        document.querySelector(contentDivId[current]).style.display = 'none';

        menuOption[next -1].classList.add('nav_item_current');

        document.querySelector(contentDivId[next]).style.display = 'block';
    }, 650);

    setTimeout(() => {
        document.querySelector(contentDivId[next] + ' h1').classList.add('slide_in_from_left_simple');
        document.querySelector(contentDivId[next] + ' h1').classList.remove('hide');

        document.querySelector(contentDivId[next] + ' div:nth-child(3)').classList.remove('hide_section');
        document.querySelector(contentDivId[next] + ' div:nth-child(3)').classList.add('show_section');
    }, 600);

    setTimeout(() => {
        document.querySelector(contentDivId[next] + ' div:nth-child(1)').classList.add('slide_in_from_right_simple');
        document.querySelector(contentDivId[next] + ' div:nth-child(1)').classList.remove('hide');
    }, 800);
}

/////////