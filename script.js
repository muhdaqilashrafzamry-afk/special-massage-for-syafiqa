// GALAXY BACKGROUND (Tak berubah)
function createStars() {
    const bg = document.querySelector('.stars-container');
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.width = Math.random() * 2 + 'px'; s.style.height = s.style.width;
        s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%';
        s.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        bg.appendChild(s);
    }
}
createStars();

const song = document.getElementById('mySong');

// THE CINEMATIC WARP TRANSITION (Tak berubah)
function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const warp = document.getElementById('warp-beams');
    const engine = document.querySelector('.engine-glow');

    if (sceneNumber === 2) {
        song.play().catch(e => console.log("User must interact first"));
        if(engine) engine.style.display = "none";
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
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}

// THE TIKTOK-STYLE CELEBRATION! (V6: SEBIJI MACAM GAMBAR KAU BAGI)
function celebrate() {
    const ship = document.getElementById('spaceship-hero');
    const container = document.getElementById('container');
    const cat = document.getElementById('cat-delivery-cinematic');
    const engine = document.querySelector('.engine-glow');

    // 1. Matikan enjin roket
    if(engine) engine.style.display = "none";

    // 2. Roket Landing Sikit ke Atas-Kiri (Saiz asal, tak zoom)
    // Kita posisikan roket kat position (atas-kiri) skrin.
    ship.style.transition = "all 1s ease-in-out";
    ship.style.left = "15%"; // Area landing roket (kiri)
    ship.style.top = "15%"; // Area landing roket (atas)
    ship.style.transform = "rotate(-10deg)"; // Pusing sikit macam landing
    ship.style.zIndex = "100"; // Duduk belakang container

    // 3. Container turun sikit ke bawah skrin (untuk bagi ruang)
    container.style.transition = "all 1s ease";
    container.style.transform = "translateY(100px)"; 

    // 4. Tukar content container kepada Mission Success (Mesej takkan ditutup)
    container.style.borderColor = "#ff4d6d";
    container.style.boxShadow = "0 0 50px rgba(255, 77, 109, 0.4)";
    
    container.innerHTML = `
        <div class="active" style="animation: fadeIn 1s forwards;">
            <h1 style="color: #ff4d6d; margin-top: 50px; font-size: 1.8rem; text-shadow: 0 0 10px #ff4d6d;">MISSION SUCCESS! ✅</h1>
            <p style="font-size: 1.1rem; font-weight: bold;">"A gift from your personal astronaut."</p>
            <p>Thank you for giving me a chance, Fiqa! ❤️</p>
            <div style="margin-top: 20px;">
                <span style="font-size: 30px;">⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    `;

    // 5. Kucing astronaut keluar kat celah antara roket & mesej (Center)
    setTimeout(() => {
        cat.classList.remove('hidden');
        cat.style.left = "50%"; // Center
        cat.style.top = "25%"; // Posisi kucing: bawah roket, atas mesej
        cat.style.transform = "translate(-50%, 0)";
        cat.classList.add('visible');
        
        createHearts(); // Hujan love keraian
    }, 1200);
}

// Function tambahan untuk effect Heart keraian
function createHearts() {
    const bg = document.querySelector('.stars-container');
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
            bg.appendChild(h);
        }, i * 100);
    }
}