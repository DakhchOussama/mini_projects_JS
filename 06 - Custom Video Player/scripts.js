const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const skip_button = document.querySelectorAll('[data-skip]');
const player__slider = document.querySelectorAll('.player__slider');


function togglePlay()
{
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton()
{
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleProgress()
{
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function skip()
{
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleplayer()
{
    video[this.name] = this.value;
}

function scrub(e)
{
    const scrubTime = ((e.offsetX / progress.offsetWidth) * video.duration);
    video.currentTime = scrubTime;
}


// add Events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skip_button.forEach(input => input.addEventListener('click', skip));
player__slider.forEach(input => input.addEventListener('change', handleplayer));
player__slider.forEach(input => input.addEventListener('mousemove', handleplayer));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);