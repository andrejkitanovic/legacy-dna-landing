$(document).ready(function () {
    const header = $('.header-fixed');

    $(window).scroll(function () {
        const offset = $(window).scrollTop();

        if (offset > 200) {
            $(header).addClass('active');
        } else $(header).removeClass('active');
    });
});
