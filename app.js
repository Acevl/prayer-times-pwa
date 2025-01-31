document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = today.toLocaleDateString('en-US', options);

    const prayerTimes = {
        fajr: '6:36',
        zuhr: '12:15',
        asr: '14:30',
        maghrib: '16:18',
        esha: '17:38'
    };

    document.getElementById('fajr').textContent = prayerTimes.fajr;
    document.getElementById('zuhr').textContent = prayerTimes.zuhr;
    document.getElementById('asr').textContent = prayerTimes.asr;
    document.getElementById('maghrib').textContent = prayerTimes.maghrib;
    document.getElementById('esha').textContent = prayerTimes.esha;

    function updateMaghribTimer() {
        const now = new Date();
        const maghribTime = new Date();
        const [hours, minutes] = prayerTimes.maghrib.split(':');
        maghribTime.setHours(hours, minutes, 0);

        if (now < maghribTime) {
            const diff = maghribTime - now;
            const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
            const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('maghrib-timer').textContent = `Maghrib will begin in ${hoursLeft}:${minutesLeft}:${secondsLeft}`;
        } else {
            document.getElementById('maghrib-timer').textContent = 'Maghrib has begun';
        }
    }

    setInterval(updateMaghribTimer, 1000);
    updateMaghribTimer();
});
