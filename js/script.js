menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(function() {

    let nav = $("#myTopnav");

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        nav.removeClass("responsive");

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;



        $("html, body").animate({
            scrollTop: elementOffset - 0
        }, 1500);
    });

});

$(document).ready(function() {
    $(window).scroll(function() {
        /*если прокрутка больше 300 показ. кнопку*/
        if ($(this).scrollTop() > 300) {
            $('.gototop, .alert').fadeIn();
            /*если нет то скрываем кнопку*/
        } else {
            $('.gototop, .alert').fadeOut();
        }
    });
    /*при клике по кнопке переходим вверх стр.*/
    $('.gototop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});