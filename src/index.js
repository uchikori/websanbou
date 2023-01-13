import "./scss/style.scss";
const onScrollHeadFollow = ( () => {
    let header = document.querySelector(".header");
    let outerHeight = header.offsetHeight;
    let overPlus = window.outerWidth * 0.1;
    console.log(outerHeight);
    console.log(overPlus);

    window.addEventListener('scroll', () => {
        let scrollNum = window.pageYOffset;
        console.log(scrollNum);
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