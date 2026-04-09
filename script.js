function createStars() {
    const bg = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.width = s.style.height = Math.random() * 2 + 'px';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        bg.appendChild(s);
    }
}
createStars();

const song = document.getElementById('mySong');

function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const warp = document.getElementById('warp-beams');

    if (sceneNumber === 2) {
        song.play();
        ship.style.opacity = "0";
        warp.classList.remove('hidden');
        setTimeout(() => { warp.style.left = "150%"; }, 50);
        container.style.opacity = "0";
        setTimeout(() => {
            showScene(2);
            container.style.opacity = "1";
            warp.classList.add('hidden');
        }, 700);
    } else {
        ship.style.left = "120%";
        setTimeout(() => {
            showScene(sceneNumber);
            ship.style.transition = "none";
            ship.style.left = "-20%";
            setTimeout(() => {
                ship.style.transition = "all 1.2s ease-in-out";
                ship.style.left = "5%";
            }, 50);
        }, 1000);
    }
}

function showScene(n) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('scene' + n).classList.add('active');
}

function moveButton() {
    const b = document.getElementById('noBtn');
    b.style.left = Math.random() * 80 + '%';
    b.style.top = Math.random() * 80 + '%';
}

function celebrate() {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const cat = document.getElementById('cat-delivery-cinematic');

    // Roket park kat atas container (Saiz asal)
    ship.style.left = "50%";
    ship.style.top = "20%";
    ship.style.transform = "translateX(-50%)";
    document.querySelector('.engine-glow').style.display = "none";

    container.innerHTML = `
        <div class="active" style="padding-top:60px;">
            <h1 style="color:#ff4d6d">MISSION SUCCESS! ✅</h1>
            <p>Thank you for giving me a chance, Fiqa! ❤️</p>
        </div>
    `;

    setTimeout(() => {
        cat.classList.remove('hidden');
        cat.style.left = "50%";
        cat.style.top = "22%"; 
        cat.style.transform = "translateX(-50%)";
        cat.classList.add('visible');
    }, 1000);
}