document.addEventListener("DOMContentLoaded", () => {
  const lihatButtons = document.querySelectorAll('.lihat');

  lihatButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const details = e.target.closest('.barang').querySelector('.details');
      details.style.display = 'block';
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('lihat')) {
      const allDetails = document.querySelectorAll('.details');
      allDetails.forEach(detail => {
        detail.style.display = 'none';
      });
    }
  });
});
