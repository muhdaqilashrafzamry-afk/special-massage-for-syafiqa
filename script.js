// GALAXY BACKGROUND (Tak berubah, ini background bintang)
function createStars() {
    const bg = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.width = Math.random() * 2.5 + 'px'; // Saiz bintang rambang
        s.style.height = s.style.width;
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        // Animasi kelipan rambang
        s.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        bg.appendChild(s);
    }
}
createStars();

const song = document.getElementById('mySong');

// THE CINEMATIC WARP TRANSITION (TIKTOK STYLE)
function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const warp = document.getElementById('warp-beams');
    const beams = document.querySelectorAll('.beam');

    // Kita cuma buat warp speed dari Scene 1 ke Scene 2
    if (sceneNumber === 2) {
        song.play().catch(e => console.log("Audio play blocked."));

        // 1. Matikan enjin roket dan 'hilangkan' roket
        const engine = document.querySelector('.engine-glow');
        if(engine) engine.style.display = "none";
        ship.style.opacity = "0";

        // 2. Tunjuk Warp Beams kat tempat roket berada
        warp.classList.remove('hidden');
        warp.classList.add('visible');
        
        // Kita set beam tu duduk center kat roket
        beams[0].style.left = "0"; // Blue beam center
        beams[1].style.left = "0"; // Pink beam center

        // 3. Beam terbang laju gila ke depan (Hyperspace Jump)
        setTimeout(() => {
            warp.style.left = "120%"; // Warp!
        }, 100);

        // 4. Fade out Scene 1
        container.style.transition = "opacity 0.5s ease";
        container.style.opacity = "0";

        // 5. Fade in Scene 2 cepat-cepat lepas beam warp
        setTimeout(() => {
            showScene(2);
            container.style.opacity = "1";
            
            // Hilangkan warp beams
            warp.classList.remove('visible');
            setTimeout(() => { warp.classList.add('hidden'); }, 500);
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
    // Gerakkan butang 'No' ke tempat rawak bila Fiqa cuba tekan
    btn.style.left = Math.random() * (window.innerWidth - 150) + "px";
    btn.style.top = Math.random() * (window.innerHeight - 150) + "px";
}

// THE CELEBRATION (CAT SURPRISE! - CLEAN ENDING)
function celebrate() {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const catCinema = document.getElementById('cat-delivery-cinematic');
    const engine = document.querySelector('.engine-glow');

    // 1. Matikan enjin roket
    if(engine) engine.style.display = "none";

    // 2. Roket Landing Sikit ke Atas Container (Saiz asal, tak zoom)
    // Kita posisikan roket tepat kat center-atas skrin.
    ship.style.transition = "all 1s ease-in-out";
    ship.style.left = "50%";
    ship.style.top = "20%"; // Area pendaratan roket (atas container)
    ship.style.transform = "translateX(-50%)"; // Center-kan
    ship.style.zIndex = "100"; // Duduk belakang container

    // 3. Container turun sikit untuk bagi ruang kat roket & kucing
    container.style.transition = "all 1s ease";
    container.style.transform = "translateY(50px)"; 

    // 4. Tukar content container kepada Mission Success (Mesej takkan ditutup)
    container.style.borderColor = "#ff4d6d";
    container.style.boxShadow = "0 0 50px rgba(255, 77, 109, 0.4)";
    
    container.innerHTML = `
        <div class="active" style="animation: fadeIn 1s forwards;">
            <h1 style="color: #ff4d6d; margin-top: 60px; font-size: 1.8rem; text-shadow: 0 0 10px #ff4d6d;">MISSION SUCCESS! ✅</h1>
            <p style="font-size: 1.1rem; font-weight: bold;">"A gift from your personal astronaut."</p>
            <p>Thank you for giving me a chance, Fiqa! ❤️</p>
            <div style="margin-top: 20px;">
                <span style="font-size: 25px;">⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    `;

    // 5. Kucing pop-up kat celah antara roket & mesej
    setTimeout(() => {
        catCinema.classList.remove('hidden');
        catCinema.style.left = "50%";
        catCinema.style.top = "25%"; // Posisi kucing: bawah roket, atas mesej
        catCinema.style.transform = "translate(-50%, 0)";
        catCinema.classList.add('visible');
        
        createHearts(); // Hujan love keraian
    }, 1200);
}

// Function tambahan untuk effect Heart keraian
function createHearts() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.innerHTML = "❤️";
            h.style.position = "absolute";
            h.style.left = Math.random() * 100 + "%";
            h.style.top = Math.random() * 100 + "%";
            h.style.fontSize = Math.random() * 20 + 15 + "px";
            h.style.animation = "fadeIn 1s forwards";
            h.style.zIndex = "1";
            container.appendChild(h);
        }, i * 100);
    }
}