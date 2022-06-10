$(function() {
    $(".p-nav-sp__hamburger").click(function () {
        $(this).toggleClass('c-active');

        if ($(this).hasClass('c-active')) {
            $('.p-nav-sp__list').addClass('c-active');
        } else {
            $('.p-nav-sp__list').removeClass('c-active');
        }
    });
});