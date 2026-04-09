// GALAXY BACKGROUND (Tak berubah)
function createStars() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px'; star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%'; star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}
createStars();

const song = document.getElementById('mySong');

// THE WARP SPEED TRANSITION (TIKTOK STYLE)
function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const warpBeams = document.getElementById('warp-beams');
    const beams = document.querySelectorAll('.beam');

    // Kita cuma buat warp speed dari Scene 1 ke Scene 2
    if(sceneNumber === 2) {
        song.play().catch(e => console.log("Waiting for user gesture"));

        // 1. Matikan enjin roket dan 'hilangkan' roket
        const engine = document.querySelector('.engine-glow');
        if(engine) engine.style.display = "none";
        ship.style.opacity = "0";

        // 2. Pop Warp Beams kat tempat roket berada
        warpBeams.classList.remove('hidden');
        warpBeams.classList.add('visible');
        
        // Kita set beam tu duduk center kat roket
        beams[0].style.left = "0"; // Blue beam center
        beams[1].style.left = "0"; // Pink beam center

        // 3. Beam terbang laju gila ke depan (Hyperspace Jump)
        setTimeout(() => {
            warpBeams.style.left = "120%"; // Warp!
        }, 100);

        // 4. Fade out Scene 1
        container.style.transition = "opacity 0.5s ease";
        container.style.opacity = "0";

        // 5. Fade in Scene 2 cepat-cepat lepas beam warp
        setTimeout(() => {
            showScene(2);
            container.style.opacity = "1";
            
            // Hilangkan warp beams
            warpBeams.classList.remove('visible');
            setTimeout(() => { warpBeams.classList.add('hidden'); }, 500);
        }, 800);

    } else {
        // Transition biasa untuk scene lain (Next-Next)
        ship.classList.add('flying');
        setTimeout(() => {
            showScene(sceneNumber);
            ship.classList.remove('flying'); ship.classList.add('reset-pos');
            setTimeout(() => {
                ship.classList.remove('reset-pos'); ship.style.left = "5%";
            }, 50);
        }, 1500);
    }
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

// THE TIKTOK-STYLE CELEBRATION! (Tak berubah, ini ending)
function celebrate() {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const catCinema = document.getElementById('cat-delivery-cinematic');

    const engine = document.querySelector('.engine-glow');
    if(engine) engine.style.display = "none";

    ship.style.transition = "all 1s ease-in-out";
    ship.style.left = "50%";
    ship.style.top = "30%"; 
    ship.style.transform = "translateX(-50%) rotate(-5deg)"; 
    ship.style.zIndex = "1000"; 

    container.style.transition = "all 0.8s ease";
    container.style.opacity = "0";
    container.style.transform = "scale(0.8)";
    setTimeout(() => { container.style.display = "none"; }, 800);

    setTimeout(() => {
        catCinema.classList.remove('hidden');
        catCinema.style.left = "50%";
        catCinema.style.top = "30%"; 
        catCinema.style.transform = "translate(-50%, -10%)"; 
        catCinema.classList.add('visible');
        
        createHearts(); 
    }, 1200); 
}

function createHearts() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.innerHTML = "❤️";
            h.style.position = "absolute";
            h.style.left = Math.random() * 100 + "%"; h.style.top = Math.random() * 100 + "%";
            h.style.fontSize = Math.random() * 20 + 15 + "px";
            h.style.animation = "fadeIn 1s forwards"; h.style.zIndex = "1";
            container.appendChild(h);
        }, i * 100);
    }
}