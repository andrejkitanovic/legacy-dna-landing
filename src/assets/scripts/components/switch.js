$(document).ready(function () {
    const rows = $('.switch__row');
    const rowDropdown = $('.switch__row-dropdown');
    const descriptions = $('.switch__description');

    if (window.innerWidth <= 576) {
        $('.switch__row').click(function () {
            if ($(this).hasClass('active')) {
                $('.switch__rows-dropdown').toggleClass('open');
            }
        });

        $(rowDropdown).each(function (index) {
            $(this).click(function () {
                $('.switch__row.active').removeClass('active');
                $('.switch__row-dropdown.active').removeClass('active');
                $('.switch__description.active').removeClass('active');

                $(rows[index]).toggleClass('active');
                $(this).toggleClass('active');
                $(descriptions[index]).toggleClass('active');
                $('.switch__rows-dropdown').removeClass('open');
            });
        });
    } else {
        $(rows).each(function (index) {
            $(this).click(function () {
                $('.switch__row.active').removeClass('active');
                $('.switch__row-dropdown.active').removeClass('active');
                $('.switch__description.active').removeClass('active');

                $(this).toggleClass('active');
                $(rowDropdown[index]).toggleClass('active');
                $(descriptions[index]).toggleClass('active');
            });
        });
    }
});
