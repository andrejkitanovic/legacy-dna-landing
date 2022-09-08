$(document).ready(function () {
    const countdown = $('#countdown').attr('aria-date');
    const countdownDate = new Date(countdown).getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();

        const difference = countdownDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        populateTime({ days, hours, minutes, seconds });

        if (difference < 0) {
            clearInterval(x);
            document.getElementById('demo').innerHTML = 'EXPIRED';
        }
    }, 1000);

    const populateTime = ({ days, hours, minutes, seconds }) => {
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    };
});
