const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo'); // `logoLink` o'zgartirildi (logoLinks -> logoLink)
const sections = document.querySelectorAll('section'); // Barcha section elementlarini olish

const activePage = () => {
    const barsBox = document.querySelector('.bars-box');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');  
    setTimeout(() => {
        barsBox.classList.add('active');  
    }, 1100);

    // Barcha sectionlardan active classini olib tashlash
    sections.forEach(section => {
        section.classList.remove('active');
    });
};

// Har bir navigatsiya linkiga event listener qo'shish
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            // Tegishli sectionni faollashtirish
            sections[idx].classList.add('active');
        }
    });
});

// Logo linkiga event listener qo'shish
logoLink.addEventListener('click', () => { 
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        // Home sectionni faollashtirish
        sections[0].classList.add('active');
    }
});
    const resumeBtns = document.querySelectorAll('.resume-btn');

    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            resumeBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            btn.classList.add('active');

            const resumeDetails = document.querySelectorAll('.resume-detail');
            resumeDetails.forEach(detail => {
                detail.classList.remove('active');
            }); 
            resumeDetails[idx].classList.add('active');
        });
    });

    // Corrected arrow button selectors
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-light'); // Fixed 'arrow-leght' to 'arrow-light'
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

    // Index for tracking the current slide
    let index = 0;

    // Get the total number of slides and portfolio details
    const imgSlides = document.querySelectorAll('.portfolio-carouse .img-slide .img-item'); // Fixed 'portfolio-carousel' to 'portfolio-carouse'
    const totalSlides = imgSlides.length; // Total number of images (7)
         
    const portfolioDetails = document.querySelectorAll('.portfolio-dedail');

    const totalDetails = portfolioDetails.length; // Total number of portfolio details (7)
    
    
    // Function to update the carousel and portfolio details
    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carouse .img-slide');
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        // Update portfolio details
        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        const detailIndex = index % totalDetails; // Match the detail to the current slide
        portfolioDetails[detailIndex].classList.add('active');
    };

    // Right arrow click event
    arrowRight.addEventListener('click', () => {
        index++;
        if (index >= totalSlides) {
            index = 0; // Loop back to the first slide
        }
        activePortfolio();
    });

    // Left arrow click event
    arrowLeft.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalSlides - 1; // Loop to the last slide
        }
        activePortfolio();
    });
    // Mavjud JavaScript kodidan oldin qo'shing
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Qolgan JavaScript kodi o'zgarishsiz qoladi...