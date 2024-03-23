
window.addEventListener('scroll', function() {
    var scrollTarget = document.getElementById('scrollTarget');
    var scrollPosition = window.scrollY;
    if(scrollPosition > 400){
        showNavbar(true);
    }else{
        showNavbar(false);
    }
});

function showNavbar(show){
    const nav = document.getElementById("dynamic-navbar");
    if(show){
        nav.style.animation = 'showNavbar 1s ease-in-out forwards';
    }else{
        nav.style.animation = 'hiddenNavbar 1s ease-in-out forwards';
    }    
}