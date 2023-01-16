import "./scss/style.scss";
const onScrollHeadFollow = ( () => {
    let header = document.querySelector(".header");
    let outerHeight = header.offsetHeight;
    let overPlus = window.outerWidth * 0.1;

    window.addEventListener('scroll', () => {
        let scrollNum = window.pageYOffset;
        if(scrollNum > outerHeight + overPlus){
            header.style.transition = "transform 0.5s ease-out";
            header.classList.add('standby', 'fixed');
        } else if (scrollNum > outerHeight) {
            if(header.classList.contains('standby')){
                header.style.transition = "transform 0.5s ease-out";
            } else {
                header.style.transition = "";
            }
            header.classList.add('standby');
            header.classList.remove('fixed');
        } else {
            header.style.transition = "";
            header.classList.remove('standby', 'fixed');
        }
    })
})();

const smoothScroll = ( ()=> {
    const anchors = document.querySelectorAll('a[href^="#"]');
    console.log(anchors);
    const header = document.querySelector('header').offsetHeight;

    for(let i = 0; i < anchors.length; i++){
        anchors[i].addEventListener('click', (event) => {
            
            event.preventDefault();

            const href = anchors[i].getAttribute("href");
            console.log(href);

            const target = document.getElementById(href.replace('#', ''));
            console.log(target)

            const position = window.pageYOffset + target.getBoundingClientRect().top - header;
            console.log(position);

            window.scroll({
                top: position,
                behavior: 'smooth'
            });

        })
    } 

})();