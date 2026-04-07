function createStars() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}
createStars();

const song = document.getElementById('mySong');

function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    if(sceneNumber === 2) song.play().catch(e => console.log("Audio waiting for user."));

    ship.classList.add('flying');
    setTimeout(() => {
        showScene(sceneNumber);
        ship.classList.remove('flying');
        ship.classList.add('reset-pos');
        setTimeout(() => {
            ship.classList.remove('reset-pos');
            ship.style.left = "5%";
        }, 50);
    }, 1500);
}

function showScene(sceneNumber) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('scene' + sceneNumber).classList.add('active');
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    btn.style.left = Math.random() * (window.innerWidth - 150) + "px";
    btn.style.top = Math.random() * (window.innerHeight - 150) + "px";
}

function celebrate() {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');

    // 1. Zoom Spaceship
    ship.style.transition = "all 2s ease-in-out";
    ship.style.left = "50%";
    ship.style.top = "45%";
    ship.style.transform = "translate(-50%, -50%) scale(4)";
    ship.style.zIndex = "1000";

    // 2. Tunjuk Kucing & Bunga
    setTimeout(() => {
        container.innerHTML = `
            <div class="active" style="animation: fadeIn 1s forwards;">
                <div class="cat-delivery">
                    <span style="font-size: 100px; display: block;">🐱</span>
                    <span class="bounce-flower">💐</span>
                </div>
                <h1 style="color: #ff4d6d;">MISSION SUCCESS!</h1>
                <p>A gift from your personal astronaut. <br>Thank you for giving me a chance, Fiqa! ❤️</p>
            </div>
        `;
        createHearts();
    }, 1800);
}

function createHearts() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.innerHTML = "❤️";
            h.style.position = "absolute";
            h.style.left = Math.random() * 100 + "%";
            h.style.top = Math.random() * 100 + "%";
            h.style.fontSize = "20px";
            h.style.animation = "fadeIn 1s forwards";
            container.appendChild(h);
        }, i * 100);
    }
}