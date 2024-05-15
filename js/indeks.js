    // Fungsi untuk menampilkan pop-up ad secara acak di dalam dokumen setelah rentang waktu tertentu
    function showPopup() {
      setTimeout(function() {
        var popup = document.getElementById('popupAd');
        popup.style.display = 'block';
        // Mendapatkan lebar dan tinggi dokumen
        var docWidth = document.documentElement.clientWidth;
        var docHeight = document.documentElement.clientHeight;
        // Mendapatkan posisi acak untuk pop-up
        var popupLeft = Math.random() * (docWidth - popup.offsetWidth);
        var popupTop = Math.random() * (docHeight - popup.offsetHeight);
        // Mengatur posisi pop-up
        popup.style.left = popupLeft + 'px';
        popup.style.top = popupTop + 'px';
      }, getRandomTime(5, 10) * 1000); // Mengubah detik menjadi milidetik
    }

    // Fungsi untuk menutup pop-up ad
    function closePopup() {
      document.getElementById('popupAd').style.display = 'none';
    }

    // Fungsi untuk mendapatkan angka acak antara min dan max
    function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Panggil fungsi showPopup saat halaman dimuat
    window.onload = showPopup;