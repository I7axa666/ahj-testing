!(function () {
  const e = document.querySelector('.btn'); const t = document.querySelector('input'); e.addEventListener('click', ((e) => {
    if (e.preventDefault(), (function (e) { const t = parseInt(e.charAt(e.length - 1), 10); let c = 0; for (let t = e.length - 2; t >= 0; t--) { let r = parseInt(e.charAt(t), 10); (e.length - t) % 2 == 0 && (r *= 2, r > 9 && (r -= 9)), c += r; } return (c + t) % 10 == 0; }(t.value))) {
      const e = (function (e) {
        const t = {
          visa: '4', master: '5', amex: '3', world: '2',
        }; const c = e.slice(0, 1); return Object.keys(t).find(((e) => t[e] === c));
      }(t.value)); document.querySelector('.active') && document.querySelector('.active').classList.remove('active'), document.querySelector(`.${e}`).classList.add('active');
    } else alert('Неверный номер карты'), document.querySelector('.active') && document.querySelector('.active').classList.remove('active');
  }));
}());
// # sourceMappingURL=main.js.map
