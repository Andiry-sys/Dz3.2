let ev = document.getElementById('text');
let area = document.getElementById('textArea');
function KeyHandler(e) {
  if (e.ctrlKey == true && e.code == 'KeyE') {
    ev.style.display = 'none';
    area.style.display = 'block';
    area.innerText = ev.innerText;
  }
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      ev.style.display = 'block';
      area.style.display = 'none';
      ev.textContent = area.value;
    }
  });
}
