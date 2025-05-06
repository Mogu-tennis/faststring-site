document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('fade-init');
    observer.observe(card);
  });
});


// トップへ戻るボタン処理
const topBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'flex';
  } else {
    topBtn.style.display = 'none';
  }
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});


// ナビ内リンクをクリックしたら閉じる
document.querySelectorAll('#navList a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
  });
});