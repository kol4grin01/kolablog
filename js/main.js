/*smooth scroll effect*/
$(function() {
    $("a.smooth-scroll").click(function(){

        //get/return id like #about, #home, etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 500);
    });
});

/*Hide navbar on scroll*/
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').style.top = '0';
    } else {
        document.querySelector('.navbar').style.top = '-60px';
    }
    prevScrollPos = currentScrollPos;
}