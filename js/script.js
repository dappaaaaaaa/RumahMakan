// Tambahkan event listener untuk navbar-extra
document.querySelector('.navbar-extra').onclick = () => {
    // Toggle kelas 'active' pada navbar
    document.querySelector('.navbar').classList.toggle('active');
};

// Ketika navbar-extra diklik, pastikan untuk mencegah event click berlanjut ke elemen di bawahnya
document.querySelector('.navbar-extra').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Tambahkan event listener untuk menutup navbar saat klik di luar navbar
document.addEventListener('click', function(event) {
    // Cek apakah yang diklik bukan navbar atau navbar-extra
    if (!event.target.closest('.navbar') && !event.target.closest('.navbar-extra')) {
        document.querySelector('.navbar').classList.remove('active');
    }
});
