const videoPlayer = document.querySelector('.video-player'),
    videoButtonPlay = document.querySelector('.video-button__play'),
    videoOtherButtonPlay = document.querySelector('.other-btn__play'),
    videoOtherButtonPause = document.querySelector('.btn-pause'),
    videoButtonStop = document.querySelector('.video-button__stop'),
    videoTimePassed = document.querySelector('.video-time__passed'),
    videoProgress = document.querySelector('.video-progress'),
    videoTimeTotal = document.querySelector('.video-time__total'),
    toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('hide');
            videoOtherButtonPlay.classList.remove('hide');
            videoOtherButtonPause.classList.add('hide');
        } else {
            videoButtonPlay.classList.add('hide');
            videoOtherButtonPlay.classList.add('hide');
            videoOtherButtonPause.classList.remove('hide');
        }
    },
    togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    },
    stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;

    },
    addZero = n => n < 10 ? '0' + n : n;

videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);

videoButtonStop.addEventListener('click', stopPlay);

videoPlayer.addEventListener('play', toggleIcon);
videoPlayer.addEventListener('pause', toggleIcon);

videoOtherButtonPlay.addEventListener('click', () => {
    togglePlay();
    toggleIcon();
});
videoOtherButtonPause.addEventListener('click', () => {
    togglePlay();
    toggleIcon();
});


videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime,
        duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60),
        secondsPassed = Math.floor(currentTime % 60),
        minuteTotal = Math.floor(duration / 60),
        secondsTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

});

videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration,
        value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
});

document.addEventListener('DOMContentLoaded', function () {
    videoProgress.value = 0;
    videoTimePassed.textContent = `00:00`;
    videoTimeTotal.textContent = `05:38`;
});