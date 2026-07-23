document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Toast helper ---------- */
  var toastEl = document.getElementById('toast');
  var toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2400);
  }

  /* ---------- Print ---------- */
  function printPage() {
    window.print();
  }
  var btnPrint = document.getElementById('btnPrint');
  var btnPrintBottom = document.getElementById('btnPrintBottom');
  if (btnPrint) btnPrint.addEventListener('click', printPage);
  if (btnPrintBottom) btnPrintBottom.addEventListener('click', printPage);

  /* ---------- Download PDF ---------- */
  function downloadPdf() {
    var element = document.querySelector('.page-wrap');
    var opt = {
      margin: [10, 10, 10, 10],
      filename: 'Siaran-Pers-PT-Cyber-International-12-Juni-2020.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    var actions = document.querySelector('.actions');
    var footer = document.querySelector('.site-footer');
    var headerActions = document.querySelector('.header-actions');
    if (actions) actions.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (headerActions) headerActions.style.display = 'none';

    showToast('Menyiapkan PDF...');

    html2pdf().set(opt).from(element).save().then(function () {
      if (actions) actions.style.display = '';
      if (footer) footer.style.display = '';
      if (headerActions) headerActions.style.display = '';
      showToast('PDF berhasil diunduh');
    });
  }
  var btnPdf = document.getElementById('btnPdf');
  var btnPdfBottom = document.getElementById('btnPdfBottom');
  if (btnPdf) btnPdf.addEventListener('click', downloadPdf);
  if (btnPdfBottom) btnPdfBottom.addEventListener('click', downloadPdf);

  /* ---------- Copy Link ---------- */
  function copyLink() {
    var url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        showToast('Tautan berhasil disalin');
      }).catch(function () {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  }
  function fallbackCopy(text) {
    var temp = document.createElement('textarea');
    temp.value = text;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand('copy');
      showToast('Tautan berhasil disalin');
    } catch (e) {
      showToast('Gagal menyalin tautan');
    }
    document.body.removeChild(temp);
  }
  var btnCopy = document.getElementById('btnCopy');
  var btnCopyBottom = document.getElementById('btnCopyBottom');
  if (btnCopy) btnCopy.addEventListener('click', copyLink);
  if (btnCopyBottom) btnCopyBottom.addEventListener('click', copyLink);

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 420) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Subtle reveal animation for list items ---------- */
  var items = document.querySelectorAll('.release-list li');
  items.forEach(function (li, i) {
    li.style.opacity = '0';
    li.style.transform = 'translateY(6px)';
    li.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(function () {
      li.style.opacity = '1';
      li.style.transform = 'translateY(0)';
    }, 200 + i * 120);
  });
});
