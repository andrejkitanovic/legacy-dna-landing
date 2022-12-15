$(document).ready(function () {
    const countdown = $('#countdown').attr('aria-date');
    const countdownDate = new Date(countdown).getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();

        const difference = countdownDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (now > countdownDate) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

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

        if (days === 1) {
            $('#days-label').text('Day');
        } else $('#days-label').text('Days');

        if (hours === 1) {
            $('#hours-label').text('Hour');
        } else $('#hours-label').text('Hours');

        if (minutes === 1) {
            $('#minutes-label').text('Minute');
        } else $('#minutes-label').text('Minutes');

        if (seconds === 1) {
            $('#seconds-label').text('Second');
        } else $('#seconds-label').text('Seconds');
    };
});
