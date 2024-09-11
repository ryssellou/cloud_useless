function connectToCloud() {
    const button = document.getElementById('cloudButton');
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    const cloudPower = document.getElementById('cloudPower');
    const powerMeter = document.getElementById('powerMeter');
    const soundEffect = document.getElementById('soundEffect');

    // Hide the button and show loading animation
    button.classList.add('hidden');
    loading.classList.remove('hidden');

    // Simulate cloud connection with a 3 second delay
    setTimeout(() => {
        loading.classList.add('hidden');
        result.classList.remove('hidden');
        
        // Show Cloud Power Meter and play random sound
        cloudPower.classList.remove('hidden');
        powerMeter.innerText = `${Math.floor(Math.random() * 101)}%`; // Random 0-100%
        playRandomSound();
    }, 3000); // 3 seconds delay
}

function enhanceCloud() {
    alert("Cloud Power Enhanced... but nothing actually changed.");
}

function summonCloudRain() {
    alert("Summoning Cloud Rain... but it's all in your head.");
}

function playRandomSound() {
    const soundEffect = document.getElementById('soundEffect');
    const sounds = [
        'https://www.soundjay.com/button/sounds/button-16.mp3', // Funny button sound
        'https://www.soundjay.com/button/sounds/button-3.mp3',  // Another button sound
        'https://www.soundjay.com/button/sounds/button-4.mp3',  // And another
        'https://www.soundjay.com/animals/cat-meow-2.mp3',      // Meow
        'https://www.soundjay.com/animals/dog-bark-1.mp3',      // Bark
        'https://www.soundjay.com/animals/cow-moo.mp3'          // Moo
    ];

    // Pick a random sound and play it
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    soundEffect.src = randomSound;
    soundEffect.play();
}
