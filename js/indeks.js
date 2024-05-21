 // Fungsi untuk menampilkan beberapa pop-up ad secara acak di dalam dokumen setelah rentang waktu tertentu
 function showPopups() {
  const container = document.getElementById('popupContainer');
  console.log('Starting to create popups');
  setInterval(function() {
    createPopup(container);
  }, getRandomTime(5, 60) * 1000); // Mengubah detik menjadi milidetik dengan rentang 1-10 detik
}

// Fungsi untuk membuat dan menampilkan satu pop-up ad
function createPopup(container) {
  // Buat elemen pop-up
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.id = 'popupAd' + new Date().getTime(); // Menggunakan timestamp untuk ID unik
  popup.style.display = 'block';

  // Konten pop-up
  popup.innerHTML = `
    <h2>Special Offer!</h2>
    <p class="iklan">Don't miss out on our exclusive deals. Click <a href="https://www.youtube.com/watch?v=YzP0FmQXtFg">here</a> to learn more.</p>
    <button class="close" onclick="closePopup('${popup.id}')">Close</button>`;

  // Mendapatkan lebar dan tinggi dokumen
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  
  // Mendapatkan posisi acak untuk pop-up
  const popupLeft = Math.random() * (docWidth - 400); // 400 adalah lebar popup
  const popupTop = Math.random() * (docHeight - 300); // 300 adalah tinggi popup

  // Mengatur posisi pop-up
  popup.style.left = popupLeft + 'px';
  popup.style.top = popupTop + 'px';

  // Tambahkan pop-up ke dalam container
  container.appendChild(popup);

  console.log(`Popup created at (${popupLeft}px, ${popupTop}px)`);
}

// Fungsi untuk menutup pop-up ad
function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = 'none';
  }
}

// Fungsi untuk mendapatkan angka acak antara min dan max
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Panggil fungsi showPopups saat halaman dimuat
window.onload = showPopups;