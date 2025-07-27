// URL affiliate yang akan dibagikan
const affiliateUrl = "https://link-affiliate-anda.com";
// Pesan yang akan ditambahkan saat berbagi
const shareMessage = "Cek produk ini! Dapatkan diskon hingga 50% dengan menggunakan link berikut: ";

// Fungsi untuk berbagi ke Facebook
function shareOnFacebook() {
    const url = https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateUrl)};
    window.open(url, '_blank', 'width=600,height=400');
}

// Fungsi untuk berbagi ke Twitter
function shareOnTwitter() {
    const text = ${shareMessage} ${affiliateUrl};
    const url = https://twitter.com/intent/tweet?text=${encodeURIComponent(text)};
    window.open(url, '_blank', 'width=600,height=400');
}

// Fungsi untuk berbagi ke WhatsApp
function shareOnWhatsApp() {
    const text = ${shareMessage} ${affiliateUrl};
    const url = https://wa.me/?text=${encodeURIComponent(text)};
    window.open(url, '_blank', 'width=600,height=600');
}

// Fungsi untuk berbagi ke Telegram
function shareOnTelegram() {
    const text = ${shareMessage} ${affiliateUrl};
    const url = https://t.me/share/url?url=${encodeURIComponent(affiliateUrl)}&text=${encodeURIComponent(shareMessage)};
    window.open(url, '_blank', 'width=600,height=500');
}

// Jika ingin menambahkan tracking (opsional)
function trackShare(platform) {
    console.log(Link dibagikan via ${platform});
    // Di sini Anda bisa menambahkan kode untuk mengirim data ke analytics
    // Contoh: Google Analytics, Facebook Pixel, dll.
}

// Menambahkan event listener untuk semua tombol share
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.classList.contains('facebook') ? 'Facebook' :
                         this.classList.contains('twitter') ? 'Twitter' :
                         this.classList.contains('whatsapp') ? 'WhatsApp' : 'Telegram';
        trackShare(platform);
    });
});